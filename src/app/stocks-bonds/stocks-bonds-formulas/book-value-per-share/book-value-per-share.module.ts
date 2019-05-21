import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookValuePerShareRoutingModule } from './book-value-per-share-routing.module';
import { BookValuePerShareComponent } from './book-value-per-share.component';
import { BookValuePerShareValComponent } from './book-value-per-share-val/book-value-per-share-val.component';
import { FormulaDefinationModule } from './../../../components/formula-defination/formula-defination.module';

@NgModule({
  declarations: [BookValuePerShareComponent, BookValuePerShareValComponent],
  imports: [
    CommonModule,
    BookValuePerShareRoutingModule,
    FormulaDefinationModule
  ]
})
export class BookValuePerShareModule { }
