import { FormulaDefinationModule } from './../../../components/formula-defination/formula-defination.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RealRateOfReturnRoutingModule } from './real-rate-of-return-routing.module';
import { RealRateOfReturnComponent } from './real-rate-of-return.component';
import { RealRateOfReturnCalComponent } from './real-rate-of-return-cal/real-rate-of-return-cal.component';

@NgModule({
  declarations: [RealRateOfReturnComponent, RealRateOfReturnCalComponent],
  imports: [
    CommonModule,
    RealRateOfReturnRoutingModule,
    FormulaDefinationModule
  ]
})
export class RealRateOfReturnModule { }
