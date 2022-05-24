import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MensagemValidacaoComponent } from './components/mensagem-validacao/mensagem-validacao.component';



@NgModule({
  declarations: [
    MensagemValidacaoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [MensagemValidacaoComponent]
})
export class SharedModule { }
