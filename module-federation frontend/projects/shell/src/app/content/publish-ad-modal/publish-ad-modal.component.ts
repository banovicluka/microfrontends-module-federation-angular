import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators,ReactiveFormsModule,FormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ContentService } from '../content.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-publish-ad-modal',
  templateUrl: './publish-ad-modal.component.html',
  styleUrls: ['./publish-ad-modal.component.css']
})
export class PublishAdModalComponent implements OnInit{

  firstFormGroup = this._formBuilder.group({
    categoriesCtrl: ['', Validators.required],
    titleCtrl: ['', Validators.required],
    descriptionCtrl: ['', Validators.required],
    priceCtrl: ['', Validators.required],
    conditionCtrl: ['', Validators.required],
    locationCtrl: ['', Validators.required],

  });
  secondFormGroup = this._formBuilder.group({
    
  });

  isLinear = true;
  
  options: any[]=[];
  selectedCategoryId!:number;
  attributes: any[]=[];

  selectedImages: File[] = [];
  fileNames: string[] = [];


  constructor(private _formBuilder: FormBuilder,public dialogRef: MatDialogRef<PublishAdModalComponent>, private service: ContentService,
    private authService: AuthService,private router:Router){
    
  }

  ngOnInit(): void {
    this.getCategoriesOfUser();
  }

  getCategoriesOfUser(){
    this.service.getAllCategories().subscribe((data:any)=>{
      this.options = data;
    });
  }

  getAllCategoryAttributes(){
    const selectedId = parseInt(this.firstFormGroup.value.categoriesCtrl as string);
    if(!isNaN(selectedId)){
      this.selectedCategoryId = selectedId;
      this.service.getAllCategoryAttributes(this.selectedCategoryId).subscribe((data:any)=>{
        this.attributes = data;
        this.updateSecondFormGroup();
      });
    } 
    
    //console.log(this.attributes);
  }

  updateSecondFormGroup(){
    this.secondFormGroup.reset();
    for(let attribute of this.attributes){
      this.secondFormGroup.addControl(attribute.id,this._formBuilder.control(''));
    }
  }

  
  imagePreviews: string[] = [];

  onFileChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      this.selectedImages = Array.from(inputElement.files);
      this.generatePreviews();
    }
  }

  generatePreviews() {
    this.imagePreviews = [];
    for (let i = 0; i < this.selectedImages.length; i++) {
      const reader = new FileReader();
      reader.onload = (event: any) => {
        this.imagePreviews.push(event.target.result);
      };
      reader.readAsDataURL(this.selectedImages[i]);
    }
  }

  removeImage(index: number) {
    this.selectedImages.splice(index, 1);
    this.imagePreviews.splice(index, 1);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.selectedImages, event.previousIndex, event.currentIndex);
    moveItemInArray(this.imagePreviews, event.previousIndex, event.currentIndex);
  }

  uploadImagesToBackend(addedProductId: number){
    this.fileNames = [];
    console.log(this.selectedImages.length);
    if(this.selectedImages.length > 0){
      for( let image of this.selectedImages){
        this.service.uploadImage(image).subscribe((data:string) => {
          this.fileNames.push(data);
          for(let fileName of this.fileNames){
            
            const imageInfo = {
              path: "assets/images/" + fileName,
              productId: addedProductId
            }
            //console.log("ajde");
            this.service.postImage(imageInfo).subscribe((data:any)=>{
              
            });
          }
        });
      }
      
    }else{
      const imageinfo = {
        path: "assets/images/no-pic.png",
        productId: addedProductId
      }
      this.service.postImage(imageinfo).subscribe((data:any)=>{
        
      })
    }
    
    
  }

  publishProduct(){
    let addedProductId;
    if(this.firstFormGroup.valid){
      const formValues = {
        title: this.firstFormGroup.get("titleCtrl")?.value,
        description: this.firstFormGroup.get("descriptionCtrl")?.value,
        price: this.firstFormGroup.get("priceCtrl")?.value,
        location: this.firstFormGroup.get("locationCtrl")?.value,
        unused: this.firstFormGroup.get("conditionCtrl")?.value,
        purchased: false,
        categoryId: this.firstFormGroup.get("categoriesCtrl")?.value,
        userId: this.authService.userId,
      };
      this.service.postProduct(formValues).subscribe((data:any)=>{
        //console.log(data);
        addedProductId = data.id as number;
        //console.log(addedProductId);
        if(this.secondFormGroup.valid){
          console.log("ddd");
          for(let controlName in this.secondFormGroup.controls){
            const control = this.secondFormGroup.get(controlName);
            console.log(addedProductId);
            const attributeValue ={
              attributeId: controlName,
              productId: addedProductId,
              value: control?.value
            }
            
            //console.log(attributeValue);
            this.service.postAttributeValues(attributeValue).subscribe((data:any)=>{
    
            })
          }
        }
        //console.log(this.selectedImages.length);
        
        this.uploadImagesToBackend(addedProductId);
        
        
        
          
        
        
        
    });
    }
    this.dialogRef.close(); 
    
  }
}
