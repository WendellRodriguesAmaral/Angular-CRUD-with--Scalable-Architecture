import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', 
    loadChildren: () => import('./pages/login/login.module')     // so carrega o modulo quando acesssar 'login'
      .then(m => m.LoginModule)  // 'm' é o modulo recebido
  },
  {
    path: 'in', 
    loadChildren: () => import('./pages/profile/profile.module')     
      .then(m => m.ProfileModule)  
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
