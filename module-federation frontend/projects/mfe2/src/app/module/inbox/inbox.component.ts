import { Component } from '@angular/core';
import { ContentService } from '../content.service';
import { MessageModalComponent } from '../message-modal/message-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent {

  messages:any[] = [];

  constructor(private service: ContentService, private dialog:MatDialog, private router:Router){
    this.service.getMessages().subscribe((data:any)=>{
      this.messages = data;
    })
  }

  viewMessage(message:any){
    const dialogRef = this.dialog.open(MessageModalComponent,{
      width:'400px',
      data:{message:message}
    });

    dialogRef.afterClosed().subscribe((option)=>{
      if(option){
        console.log(option);
        
      }
   });
  }

  getTheme(){
    return this.service.currentTheme$;
  }

  goToBaseUrl(){
    this.router.navigate(['/']);
  }
}
