import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ContentService } from '../content.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-message-modal',
  templateUrl: './message-modal.component.html',
  styleUrls: ['./message-modal.component.css']
})
export class MessageModalComponent {

  message:any;

  text:any;

  constructor(public dialogRef: MatDialogRef<MessageModalComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private service:ContentService,
    private router:Router){
    this.message = data.message;
  }

  onSubmit(){
    console.log(this.text + " " + this.message.userId);
    this.service.sendReply(this.text,this.message.userId).subscribe((data:any)=>{
      
    });
    this.dialogRef.close();
  }

  goToInbox(){
    this.dialogRef.close();
  }
}
