import { Component } from '@angular/core';
import { ContentService } from '../content.service';
import { MatDialog } from '@angular/material/dialog';
import { EditCategoryModalComponent } from '../edit-category-modal/edit-category-modal.component';
import { ActivatedRoute, Router } from '@angular/router';
import { AddCategoryModalComponent } from '../add-category-modal/add-category-modal.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {

  categories:any[] = [];

  constructor(private service:ContentService, private dialog:MatDialog, private router:Router, private route:ActivatedRoute){

  }

  ngOnInit(){
    this.getAllCategories();
  }

  getAllCategories(){
    this.service.getAllCategories().subscribe((data:any)=>{
      this.categories = data;
    });
  }

  openEditModal(category:any){
      const dialogRef = this.dialog.open(EditCategoryModalComponent,{
        width:'400px',
        data:{category:category}
      });
  
      dialogRef.afterClosed().subscribe((option)=>{
        if(option){
          console.log(option);
          
        }
      });
  
    }

    openAddModal(){
      const dialogRef = this.dialog.open(AddCategoryModalComponent,{
        width:'400px',
      });
  
      dialogRef.afterClosed().subscribe((option)=>{
        if(option){
          console.log(option);
          this.categories.push(option);
        }
      });
    }

    deleteCategory(category:any){
      this.service.deleteCategory(category).subscribe((data:any)=>{
        this.categories = this.categories.filter(item => item.id !== category.id);
      });
    }

    seeAttributesOfCategory(categoryId:any){
      this.router.navigate(['../attributes',categoryId], { relativeTo: this.route } );
    }

    getTheme(){
      return this.service.currentTheme$;
    }
  
    goBack(){
      this.router.navigate(['../menu'], { relativeTo: this.route });
    }
}
