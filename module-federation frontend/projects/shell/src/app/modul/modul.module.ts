import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KomponentaComponent } from './komponenta/komponenta.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppModule } from '../app.module';
import { LoginComponent } from './login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PinInputComponent } from './pin-input/pin-input.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    KomponentaComponent,
    LoginComponent,
    RegistrationComponent,
    PinInputComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule.forChild(),
  ]
})
export class ModulModule { }
