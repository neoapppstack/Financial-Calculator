import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormulaDefinitionComponent } from './formula-definition.component';

@NgModule({
  declarations: [FormulaDefinitionComponent],
  imports: [
    CommonModule
  ],
  exports: [
    FormulaDefinitionComponent
  ]
})
export class FormulaDefinitionModule { }
