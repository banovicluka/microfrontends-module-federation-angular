import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContentService } from '../content.service';
import { AddAttributeModalComponent } from '../add-attribute-modal/add-attribute-modal.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { EditAttributeModalComponent } from '../edit-attribute-modal/edit-attribute-modal.component';

@Component({
  selector: 'app-attributes',
  templateUrl: './attributes.component.html',
  styleUrls: ['./attributes.component.css']
})
export class AttributesComponent {

  categoryId:any;
  attributes:any[] = []

  constructor(private route:ActivatedRoute, private service: ContentService, private dialog:MatDialog, private router:Router){

  }

  ngOnInit(){
    this.route.params.subscribe((params:any)=>{
      this.categoryId = params["id"];
      this.service.findAllCategoryAttributes(this.categoryId).subscribe((data:any)=>{
        this.attributes = data;
      });
    })
  }

  openAddModal(){
    const dialogRef = this.dialog.open(AddAttributeModalComponent,{
      width:'400px',
      data:{ categoryId:this.categoryId}
    });

    dialogRef.afterClosed().subscribe((option)=>{
      if(option){
        console.log(option);
        this.attributes.push(option);
      }
    });
  }

  openEditModal(attribute:any){
    const dialogRef = this.dialog.open(EditAttributeModalComponent,{
      width:'400px',
      data:{attribute: attribute}
    });

    dialogRef.afterClosed().subscribe((option)=>{
      if(option){
        console.log(option);
        
      }
    });
  }
  

  deleteAttribute(attribute:any){
    this.service.deleteAttribute(attribute).subscribe((data:any)=>{
      this.attributes = this.attributes.filter(item => item.id !== attribute.id);
    });
  }

  getTheme(){
    return this.service.currentTheme$;
  }

  goBack(){
    this.router.navigate(['../../menu'], { relativeTo: this.route });
  }
}
