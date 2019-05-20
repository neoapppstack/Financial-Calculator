import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrentRatioRoutingModule } from './current-ratio-routing.module';
import { CurrentRatioComponent } from './current-ratio.component';
import { CurrentRatioCalComponent } from './current-ratio-cal/current-ratio-cal.component';

@NgModule({
  declarations: [CurrentRatioComponent, CurrentRatioCalComponent],
  imports: [
    CommonModule,
    CurrentRatioRoutingModule
  ]
})
export class CurrentRatioModule { }
