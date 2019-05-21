import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WeightedAverageRoutingModule } from './weighted-average-routing.module';
import { WeightedAverageComponent } from './weighted-average.component';
import { WeightedAverageCalComponent } from './weighted-average-cal/weighted-average-cal.component';
import { FormulaDefinitionModule } from '../../../components/formula-definition/formula-definition.module';

@NgModule({
  declarations: [WeightedAverageComponent, WeightedAverageCalComponent],
  imports: [
    CommonModule,
    WeightedAverageRoutingModule,
    FormulaDefinitionModule
  ]
})
export class WeightedAverageModule { }
