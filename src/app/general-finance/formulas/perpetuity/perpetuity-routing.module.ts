import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PerpetuityComponent } from './perpetuity.component';

const routes: Routes = [
  {
    path: '',
    component: PerpetuityComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerpetuityRoutingModule { }
