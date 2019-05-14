import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RuleOfSeventyTwoComponent } from './rule-of-seventy-two.component';

const routes: Routes = [
  {
    path: '',
    component: RuleOfSeventyTwoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RuleOfSeventyTwoRoutingModule { }
