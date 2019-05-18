import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RateOfInflationComponent } from './rate-of-inflation.component';

const routes: Routes = [
  {
    path: '',
    component: RateOfInflationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RateOfInflationRoutingModule { }
