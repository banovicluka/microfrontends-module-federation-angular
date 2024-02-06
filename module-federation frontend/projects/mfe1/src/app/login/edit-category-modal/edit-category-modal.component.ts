import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ContentService } from '../content.service';

@Component({
  selector: 'app-edit-category-modal',
  templateUrl: './edit-category-modal.component.html',
  styleUrls: ['./edit-category-modal.component.css']
})
export class EditCategoryModalComponent {

  category:any;

  categoryName:any;

  constructor(public dialogRef: MatDialogRef<EditCategoryModalComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private service:ContentService){
    this.category = data.category;
    this.categoryName = this.category.name;
  }

  onCancel(){
    this.dialogRef.close(null);
  }

  onSave(){
    if(this.categoryName !== ""){
      this.category.name = this.categoryName;
      this.service.updateCategory(this.category).subscribe((data:any)=>{
        this.dialogRef.close(this.category);
      });
      
    }else{
      this.dialogRef.close(null);
    }
    
  }
}
