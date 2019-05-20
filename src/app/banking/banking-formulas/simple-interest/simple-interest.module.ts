import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SimpleInterestRoutingModule } from './simple-interest-routing.module';
import { SimpleInterestComponent } from './simple-interest.component';
import { SimpleInterestCalComponent } from './simple-interest-cal/simple-interest-cal.component';

@NgModule({
  declarations: [SimpleInterestComponent, SimpleInterestCalComponent],
  imports: [
    CommonModule,
    SimpleInterestRoutingModule
  ]
})
export class SimpleInterestModule { }
