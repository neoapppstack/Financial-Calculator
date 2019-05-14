import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoublingTimeComponent } from './doubling-time.component';

const routes: Routes = [
  {
    path: '',
    component: DoublingTimeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoublingTimeRoutingModule { }
