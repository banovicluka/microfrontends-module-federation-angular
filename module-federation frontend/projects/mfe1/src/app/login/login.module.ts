import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MenuComponent } from './menu/menu.component';
import { CategoriesComponent } from './categories/categories.component';
import { UsersComponent } from './users/users.component';
import { LogsComponent } from './logs/logs.component';
import { AttributesComponent } from './attributes/attributes.component';
import { AddCategoryModalComponent } from './add-category-modal/add-category-modal.component';
import { EditCategoryModalComponent } from './edit-category-modal/edit-category-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AddAttributeModalComponent } from './add-attribute-modal/add-attribute-modal.component';
import { EditAttributeModalComponent } from './edit-attribute-modal/edit-attribute-modal.component';
import { AddUserModalComponent } from './add-user-modal/add-user-modal.component';
import { EditUserModalComponent } from './edit-user-modal/edit-user-modal.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { StoreModule } from '@ngrx/store';

export function HttpLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http);
}


@NgModule({
  declarations: [
    LoginComponent,
    MenuComponent,
    CategoriesComponent,
    UsersComponent,
    LogsComponent,
    AttributesComponent,
    AddCategoryModalComponent,
    EditCategoryModalComponent,
    AddAttributeModalComponent,
    EditAttributeModalComponent,
    AddUserModalComponent,
    EditUserModalComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    TranslateModule.forRoot({
      loader:{
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps:[HttpClient]
      }
      
    })
  ]
})
export class LoginModule { }
