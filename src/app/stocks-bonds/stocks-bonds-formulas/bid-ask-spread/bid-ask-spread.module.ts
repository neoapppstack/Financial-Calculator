import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BidAskSpreadRoutingModule } from './bid-ask-spread-routing.module';
import { BidAskSpreadComponent } from './bid-ask-spread.component';
import { BidAskSpreadCalComponent } from './bid-ask-spread-cal/bid-ask-spread-cal.component';

@NgModule({
  declarations: [BidAskSpreadComponent, BidAskSpreadCalComponent],
  imports: [
    CommonModule,
    BidAskSpreadRoutingModule
  ]
})
export class BidAskSpreadModule { }
