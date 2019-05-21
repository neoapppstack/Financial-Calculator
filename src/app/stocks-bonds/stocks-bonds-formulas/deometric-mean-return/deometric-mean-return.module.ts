import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeometricMeanReturnRoutingModule } from './deometric-mean-return-routing.module';
import { DeometricMeanReturnComponent } from './deometric-mean-return.component';
import { DeometricMeanReturnCalComponent } from './deometric-mean-return-cal/deometric-mean-return-cal.component';
import { FormulaDefinationModule } from './../../../components/formula-defination/formula-defination.module';

@NgModule({
  declarations: [DeometricMeanReturnComponent, DeometricMeanReturnCalComponent],
  imports: [
    CommonModule,
    DeometricMeanReturnRoutingModule,
    FormulaDefinationModule
  ]
})
export class DeometricMeanReturnModule { }
