import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mensagem-validacao',
  templateUrl: './mensagem-validacao.component.html',
  styleUrls: ['./mensagem-validacao.component.scss']
})
export class MensagemValidacaoComponent implements OnInit {

  @Input() message:string='';
  constructor() { }

  ngOnInit(): void {
  }

}
