import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { ContentService } from '../content.service';

@Component({
  selector: 'app-user-support',
  templateUrl: './user-support.component.html',
  styleUrls: ['./user-support.component.css']
})
export class UserSupportComponent {

  title: any;
  content: any;

  constructor(private router:Router, private service:ContentService,
    private authService: AuthService){

  }

  navigateOnHome(){
    this.router.navigateByUrl("");
  }

  onSubmit(){
    let message={
      subject: this.title,
      content: this.content,
      seen: 0,
      operatorId: 1,
      userId: this.authService.userId
    }
    console.log(message);
    this.service.postMessage(message).subscribe((data:any)=>{
      this.router.navigateByUrl('');
    });
  }

  getTheme(){
    return this.service.currentTheme$;
  }
}
