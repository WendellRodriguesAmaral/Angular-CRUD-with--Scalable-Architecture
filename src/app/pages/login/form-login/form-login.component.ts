import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {

  email: string='';
  password: string='';

  constructor() { }

  ngOnInit(): void {
  }

  login(){
    console.log({email: this.email, password: this.password})
    
    //momentaneo
    window.location.reload();  //recarrega a pagina
  }

}
