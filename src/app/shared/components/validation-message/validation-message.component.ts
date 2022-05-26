import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-validation-message',
  templateUrl: './validation-message.component.html',
  styleUrls: ['./validation-message.component.scss']
})
export class ValidationMEssageComponent implements OnInit {

  @Input() message:string='';
  constructor() { }

  ngOnInit(): void {
  }

}
