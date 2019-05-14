import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PresentValueComponent } from './present-value.component';

const routes: Routes = [
  {
    path: '',
    component: PresentValueComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PresentValueRoutingModule { }
