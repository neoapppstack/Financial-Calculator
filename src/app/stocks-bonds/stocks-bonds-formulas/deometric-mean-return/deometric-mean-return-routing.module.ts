import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeometricMeanReturnComponent } from './deometric-mean-return.component';

const routes: Routes = [
  {
    path: '',
    component: DeometricMeanReturnComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeometricMeanReturnRoutingModule { }
