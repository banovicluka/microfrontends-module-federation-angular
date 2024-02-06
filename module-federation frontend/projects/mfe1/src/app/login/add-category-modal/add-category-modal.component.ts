import { Component } from '@angular/core';
import { ContentService } from '../content.service';
import { MatDialogRef } from '@angular/material/dialog';
import { EditCategoryModalComponent } from '../edit-category-modal/edit-category-modal.component';

@Component({
  selector: 'app-add-category-modal',
  templateUrl: './add-category-modal.component.html',
  styleUrls: ['./add-category-modal.component.css']
})
export class AddCategoryModalComponent {

  categoryName:any;

  constructor(public dialogRef: MatDialogRef<EditCategoryModalComponent>,private service:ContentService){

  }

  onCancel(){
    this.dialogRef.close(null);
  }

  onSave(){
    if(this.categoryName !== ""){
      let category = {
        name: this.categoryName
      };
      this.service.insertCategory(category).subscribe((data:any)=>{
        this.dialogRef.close(data);
      });
      
    }else{
      this.dialogRef.close(null);
    }
    
  }
}
