import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DilutedEpsRoutingModule } from './diluted-eps-routing.module';
import { DilutedEpsComponent } from './diluted-eps.component';
import { DilutedEpsCalComponent } from './diluted-eps-cal/diluted-eps-cal.component';
import { FormulaDefinationModule } from './../../../components/formula-defination/formula-defination.module';

@NgModule({
  declarations: [DilutedEpsComponent, DilutedEpsCalComponent],
  imports: [
    CommonModule,
    DilutedEpsRoutingModule,
    FormulaDefinationModule
  ]
})
export class DilutedEpsModule { }
