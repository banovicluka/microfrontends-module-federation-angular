import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { InboxComponent } from './inbox/inbox.component';

const routes: Routes = [
  {path:"", component:LoginComponent},
  {path:"inbox", component:InboxComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleRoutingModule { }
