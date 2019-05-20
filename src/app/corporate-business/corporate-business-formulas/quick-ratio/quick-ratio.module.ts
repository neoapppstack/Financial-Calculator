import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuickRatioRoutingModule } from './quick-ratio-routing.module';
import { QuickRatioComponent } from './quick-ratio.component';
import { QuickRatioCalComponent } from './quick-ratio-cal/quick-ratio-cal.component';

@NgModule({
  declarations: [QuickRatioComponent, QuickRatioCalComponent],
  imports: [
    CommonModule,
    QuickRatioRoutingModule
  ]
})
export class QuickRatioModule { }
