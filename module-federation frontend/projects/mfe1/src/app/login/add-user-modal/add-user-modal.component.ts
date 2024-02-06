import { Component } from '@angular/core';
import { ContentService } from '../content.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-user-modal',
  templateUrl: './add-user-modal.component.html',
  styleUrls: ['./add-user-modal.component.css']
})
export class AddUserModalComponent {

  firstName:any = null;
  lastName:any = null;
  pin:any = null;
  active:any = null;
  username:any = null;
  password:any = null;
  city:any = null;
  email:any = null;

  constructor(public dialogRef: MatDialogRef<AddUserModalComponent>,private service:ContentService){

  }


  onSave(){
    if(this.firstName === null || this.lastName === null || this.pin === null || this.active === null 
      || this.city === null || this.email === null || this.username === null || this.password === null){
        
      }else{
        let user = {
          firstName: this.firstName,
          lastName: this.lastName,
          pin:this.pin,
          active:this.active,
          city: this.city,
          email: this.email,
          username:this.username,
          password: this.password
        };
        this.service.insertUser(user).subscribe((data:any)=>{
          this.dialogRef.close(data);
        });
      }
      
  }

  onCancel(){
    this.dialogRef.close(null);
  }

}
