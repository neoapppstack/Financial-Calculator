import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrentRatioComponent } from './current-ratio.component';

const routes: Routes = [
  {
    path: '',
    component: CurrentRatioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurrentRatioRoutingModule { }
