import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  ValidationMEssageComponent } from './components/validation-message/validation-message.component';



@NgModule({
  declarations: [
    ValidationMEssageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [ValidationMEssageComponent]
})
export class SharedModule { }
