import { Component } from '@angular/core';
import { ContentService } from '../content.service';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AddUserModalComponent } from '../add-user-modal/add-user-modal.component';
import { EditUserModalComponent } from '../edit-user-modal/edit-user-modal.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  users:any[]= [];

  ngOnInit(){
    this.service.findAllUsers().subscribe((data:any)=>{
      this.users = data;
    });
  }

  constructor(private service:ContentService, private dialog:MatDialog, private router:Router, private route:ActivatedRoute){

  }
  addNewUser(){
    const dialogRef = this.dialog.open(AddUserModalComponent,{
      width:'550px',
    });

    dialogRef.afterClosed().subscribe((option)=>{
      if(option){
        console.log(option);
        this.users.push(option);
      }
    });
  }

  editUser(user:any){
    const dialogRef = this.dialog.open(EditUserModalComponent,{
      width:'400px',
      data:{user:user}
    });

    dialogRef.afterClosed().subscribe((option)=>{
      if(option){
        console.log(option);
        
      }
    });
  }

  deleteUser(user:any){
    this.service.deleteUser(user).subscribe((data:any)=>{
      this.users = this.users.filter(item => item.id !== user.id);
    });
  }

  getTheme(){
    return this.service.currentTheme$;
  }

  goBack(){
    this.router.navigate(['../menu'], { relativeTo: this.route });
  }
}
