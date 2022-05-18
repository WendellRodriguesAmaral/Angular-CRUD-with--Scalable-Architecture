import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', 
    loadChildren: () => import('./pages/login/login.module')     // so carrega o modulo quando acesssar 'login'
      .then(m => m.LoginModule)  // 'm' é o modulo recebido
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
