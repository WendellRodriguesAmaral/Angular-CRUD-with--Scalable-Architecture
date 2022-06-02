import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {

  email: string='';
  password: string='';

  passwordView:string ='password';

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  login():void{
    //obj contendo email e login para envio
    //{email: this.email, password: this.password})

    //momentaneo
    // window.location.reload();  //recarrega a pagina

    this.router.navigateByUrl('in/home')
  }

  changePasswordView():void {
    this.passwordView == 'password' ? this.passwordView = 'text' : this.passwordView = 'password';
  }

}
