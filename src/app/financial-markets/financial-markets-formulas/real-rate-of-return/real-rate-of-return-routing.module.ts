import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RealRateOfReturnCalComponent } from './real-rate-of-return-cal/real-rate-of-return-cal.component';

const routes: Routes = [
  {
    path: '',
    component: RealRateOfReturnCalComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RealRateOfReturnRoutingModule { }
