import { FormulaDefinitionModule } from '../../../components/formula-definition/formula-definition.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RateOfInflationRoutingModule } from './rate-of-inflation-routing.module';
import { RateOfInflationComponent } from './rate-of-inflation.component';
import { RateOfInflationCalComponent } from './rate-of-inflation-cal/rate-of-inflation-cal.component';

@NgModule({
  declarations: [RateOfInflationComponent, RateOfInflationCalComponent],
  imports: [
    CommonModule,
    RateOfInflationRoutingModule,
    FormulaDefinitionModule
  ]
})
export class RateOfInflationModule { }
