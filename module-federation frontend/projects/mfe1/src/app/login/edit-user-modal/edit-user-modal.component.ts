import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ContentService } from '../content.service';

@Component({
  selector: 'app-edit-user-modal',
  templateUrl: './edit-user-modal.component.html',
  styleUrls: ['./edit-user-modal.component.css']
})
export class EditUserModalComponent {

  // firstName:any;
  // lastName:any;
  // pin:any;
  // active:any;
  // username:any;
  // password:any;
  // city:any;
  // email:any;

  user:any;

  constructor(public dialogRef: MatDialogRef<EditUserModalComponent>,@Inject(MAT_DIALOG_DATA) public data: any,private service:ContentService){
    this.user = data.user;
  }

 

  onSave(){
    if(this.user.firstName === null || this.user.lastName === null || this.user.pin === null || this.user.active === null 
      || this.user.city === null || this.user.email === null || this.user.username === null || this.user.password === null){
      
      }else{
        this.service.updateUser(this.user).subscribe((data:any)=>{
          this.dialogRef.close(this.user);
        });
      }
      
  }

  onCancel(){
    this.dialogRef.close(null);
  }
}
