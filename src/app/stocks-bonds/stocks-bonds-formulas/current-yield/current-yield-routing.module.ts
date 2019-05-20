import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrentYieldComponent } from './current-yield.component';

const routes: Routes = [
  {
    path: '',
    component: CurrentYieldComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurrentYieldRoutingModule { }
