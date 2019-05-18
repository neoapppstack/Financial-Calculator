import { FormulaCardModule } from './../components/formula-card/formula-card.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CorporateBusinessRoutingModule } from './corporate-business-routing.module';
import { CorporateBusinessComponent } from './corporate-business.component';

@NgModule({
  declarations: [CorporateBusinessComponent],
  imports: [
    CommonModule,
    CorporateBusinessRoutingModule,
    FormulaCardModule
  ]
})
export class CorporateBusinessModule { }
