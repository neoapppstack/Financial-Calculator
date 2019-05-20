import { RealRateOfReturnComponent } from './real-rate-of-return.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    component: RealRateOfReturnComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RealRateOfReturnRoutingModule { }
