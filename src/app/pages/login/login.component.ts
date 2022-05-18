import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  route:string | undefined = '';

  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.route = this.activeRoute.snapshot.routeConfig?.path;
  }

}
