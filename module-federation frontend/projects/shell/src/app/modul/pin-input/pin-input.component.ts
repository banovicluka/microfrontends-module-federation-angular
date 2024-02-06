import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
// import { AuthService } from 'src/app/auth/auth.service';
import { RegistrationService } from '../registration/registration.service';
import { PinInputService } from './pin-input.service';

@Component({
  selector: 'app-pin-input',
  templateUrl: './pin-input.component.html',
  styleUrls: ['./pin-input.component.css']
})
export class PinInputComponent {
  
  pin:string | undefined;
  userId:string | undefined ;
  info: string | undefined;

  constructor(private route:ActivatedRoute,private router:Router, private registrationService: RegistrationService,
    private service: PinInputService, private authService: AuthService){}

  ngOnInit() {
    // this.route.params.subscribe(params => {
    //   this.userId = params['id']; 
    // });
  }

  onSubmit(){
      // console.log(this.pin);
      // console.log(this.registrationService.getPin());
    if(this.pin === this.registrationService.getPin()){
      
      this.service.updateAccStatus(this.authService.userInfomation).subscribe((data:any)=>{
        
      });
      this.authService.setLoggedIn(true);
      this.router.navigateByUrl('');
    }
  }

  navigateToHomePage(){
    this.router.navigateByUrl('');
  }

  getTheme(){
    return this.service.currentTheme$;
  }
}
