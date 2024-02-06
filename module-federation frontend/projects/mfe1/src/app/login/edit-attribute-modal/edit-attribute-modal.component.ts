import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ContentService } from '../content.service';

@Component({
  selector: 'app-edit-attribute-modal',
  templateUrl: './edit-attribute-modal.component.html',
  styleUrls: ['./edit-attribute-modal.component.css']
})
export class EditAttributeModalComponent {

  attributeName:any;
  attribute:any;

  constructor(public dialogRef: MatDialogRef<EditAttributeModalComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private service:ContentService){
    this.attribute = data.attribute,
    this.attributeName = this.attribute.name;
  }

  onSave(){
    if(this.attributeName !== ""){
      this.attribute.name = this.attributeName;
      this.service.updateAttribute(this.attribute).subscribe((data:any)=>{
        this.dialogRef.close(this.attribute);
      });
      
    }else{
      this.dialogRef.close(null);
    }
    
  }

  onCancel(){
    this.dialogRef.close(null);
  }

}
