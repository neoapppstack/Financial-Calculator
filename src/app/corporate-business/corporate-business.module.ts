import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CorporateBusinessRoutingModule } from './corporate-business-routing.module';
import { CorporateBusinessComponent } from './corporate-business.component';

@NgModule({
  declarations: [CorporateBusinessComponent],
  imports: [
    CommonModule,
    CorporateBusinessRoutingModule
  ]
})
export class CorporateBusinessModule { }
