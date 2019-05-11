import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormulaCardComponent } from './formula-card.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [FormulaCardComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    FormulaCardComponent
  ]
})
export class FormulaCardModule { }
