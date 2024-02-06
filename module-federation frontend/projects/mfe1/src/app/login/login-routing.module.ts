import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { CategoriesComponent } from './categories/categories.component';
import { AttributesComponent } from './attributes/attributes.component';
import { LogsComponent } from './logs/logs.component';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
  {path:"", component:LoginComponent},
  // {path:"admin", component:LoginComponent },
  {path:"menu", component:MenuComponent},
  {path:"categories", component:CategoriesComponent},
  {path:"attributes/:id", component:AttributesComponent},
  {path:"logs", component:LogsComponent},
  {path:"users", component:UsersComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
