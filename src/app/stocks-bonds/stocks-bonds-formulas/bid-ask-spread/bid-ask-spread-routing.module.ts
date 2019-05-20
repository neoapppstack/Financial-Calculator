import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BidAskSpreadComponent } from './bid-ask-spread.component';

const routes: Routes = [
  {
    path: '',
    component: BidAskSpreadComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BidAskSpreadRoutingModule { }
