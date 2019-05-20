import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AverageCollectionPeriodRoutingModule } from './average-collection-period-routing.module';
import { AverageCollectionPeriodComponent } from './average-collection-period.component';
import { AverageCollectionPeriodCalComponent } from './average-collection-period-cal/average-collection-period-cal.component';

@NgModule({
  declarations: [AverageCollectionPeriodComponent, AverageCollectionPeriodCalComponent],
  imports: [
    CommonModule,
    AverageCollectionPeriodRoutingModule
  ]
})
export class AverageCollectionPeriodModule { }
