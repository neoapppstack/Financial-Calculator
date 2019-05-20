import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookValuePerShareComponent } from './book-value-per-share.component';

const routes: Routes = [
  {
    path: '',
    component: BookValuePerShareComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookValuePerShareRoutingModule { }
