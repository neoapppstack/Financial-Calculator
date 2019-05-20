import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PriceToBookValueComponent } from './price-to-book-value.component';

const routes: Routes = [
  {
    path: '',
    component: PriceToBookValueComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PriceToBookValueRoutingModule { }
