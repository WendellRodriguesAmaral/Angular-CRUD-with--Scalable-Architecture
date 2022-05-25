import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {

  email: string='';
  password: string='';

  passwordView:string ='password';

  constructor() { }

  ngOnInit(): void {
  }

  login():void{
    //obj contendo email e login para envio
    //{email: this.email, password: this.password})

    //momentaneo
    window.location.reload();  //recarrega a pagina
  }

  changePasswordView():void {
    this.passwordView == 'password' ? this.passwordView = 'text' : this.passwordView = 'password';
  }

}
