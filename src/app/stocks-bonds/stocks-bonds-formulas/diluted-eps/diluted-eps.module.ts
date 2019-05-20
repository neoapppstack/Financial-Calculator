import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DilutedEpsRoutingModule } from './diluted-eps-routing.module';
import { DilutedEpsComponent } from './diluted-eps.component';
import { DilutedEpsCalComponent } from './diluted-eps-cal/diluted-eps-cal.component';

@NgModule({
  declarations: [DilutedEpsComponent, DilutedEpsCalComponent],
  imports: [
    CommonModule,
    DilutedEpsRoutingModule
  ]
})
export class DilutedEpsModule { }
