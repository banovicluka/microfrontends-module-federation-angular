import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ContentService } from '../content.service';

@Component({
  selector: 'app-add-attribute-modal',
  templateUrl: './add-attribute-modal.component.html',
  styleUrls: ['./add-attribute-modal.component.css']
})
export class AddAttributeModalComponent {

  attributeName:any;
  categoryId:any;

  constructor(public dialogRef: MatDialogRef<AddAttributeModalComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private service:ContentService){
    this.categoryId = data.categoryId;
  }

  onSave(){
    if(this.attributeName !== ""){
      let attribute = {
        name: this.attributeName,
        category: {
          id: this.categoryId
        }
      };
      this.service.insertAttribute(attribute).subscribe((data:any)=>{
        this.dialogRef.close(data);
      });
      
    }else{
      this.dialogRef.close(null);
    }
  }

  onCancel(){
    this.dialogRef.close(null);
  }
}
