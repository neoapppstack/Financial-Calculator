import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaybackPeriodComponent } from './payback-period.component';

const routes: Routes = [
  {
    path: '',
    component: PaybackPeriodComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaybackPeriodRoutingModule { }
