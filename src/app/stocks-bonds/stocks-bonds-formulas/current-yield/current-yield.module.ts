import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrentYieldRoutingModule } from './current-yield-routing.module';
import { CurrentYieldComponent } from './current-yield.component';
import { CurrentYieldCalComponent } from './current-yield-cal/current-yield-cal.component';

@NgModule({
  declarations: [CurrentYieldComponent, CurrentYieldCalComponent],
  imports: [
    CommonModule,
    CurrentYieldRoutingModule
  ]
})
export class CurrentYieldModule { }
