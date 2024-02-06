import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { ProductDetailsComponent } from './product-details/product-details.component';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
  declarations: [
   // ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
  ]
})
export class ProductsModule { }
