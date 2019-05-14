import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PresentValueOfGrowingPerpetuityComponent } from './present-value-of-growing-perpetuity.component';

const routes: Routes = [
  {
    path: '',
    component: PresentValueOfGrowingPerpetuityComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PresentValueOfGrowingPerpetuityRoutingModule { }
