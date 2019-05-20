import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DilutedEpsComponent } from './diluted-eps.component';

const routes: Routes = [
  {
    path: '',
    component: DilutedEpsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DilutedEpsRoutingModule { }
