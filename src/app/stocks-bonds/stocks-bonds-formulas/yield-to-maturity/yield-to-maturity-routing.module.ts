import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { YieldToMaturityComponent } from './yield-to-maturity.component';

const routes: Routes = [
  {
    path: '',
    component: YieldToMaturityComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YieldToMaturityRoutingModule { }
