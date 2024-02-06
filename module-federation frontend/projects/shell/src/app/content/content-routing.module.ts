import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home/home.component';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
   {path:"" , component:AllproductsComponent},
   {path:"product/:id",component:ProductDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }
