import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegistrationService } from './registration.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  
  registrationForm: FormGroup;
  info: string | undefined;

  constructor(private formBuilder: FormBuilder, private service: RegistrationService, private router:Router, private titleService: Title){
    this.registrationForm = this.formBuilder.group({
      firstName: ['',Validators.required],
      lastName: ['', Validators.required],
      city: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: ['', [Validators.required,Validators.minLength(6)]],
      confirmPassword: ['']
    })
    this.titleService.setTitle("Shell");
  }

  onSubmit(){
    if(this.registrationForm.valid){
      if(this.registrationForm.get("password")?.value === this.registrationForm.get("confirmPassword")?.value){
        this.service.postUser(this.registrationForm.value).subscribe((data:any)=>{

          this.router.navigateByUrl('/login');
          this.service.setPin(data?.pin.toString());
        });
      }else{
        this.info = "Lozinke koje ste unijeli se ne poklapaju"
      }
    }else{
      this.info = "Forme nisu ispravno popunjene."
    }
  }

  getTheme(){
    return this.service.currentTheme$;
  }
}
