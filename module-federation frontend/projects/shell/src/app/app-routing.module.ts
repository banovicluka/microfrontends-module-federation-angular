import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {
  //   path:'login' , 
  //   loadChildren: () => import('mfe1/Module').then((m) => m.LoginModule)

  // },
  { path:'', loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule)},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
