import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormLoginComponent } from './form-login/form-login.component';
import { LoginComponent } from './login.component';
import { NewUserComponent } from './new-user/new-user.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent,
    children: [
      { path: '', component: FormLoginComponent },
      { path: 'subscribe', component: NewUserComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
