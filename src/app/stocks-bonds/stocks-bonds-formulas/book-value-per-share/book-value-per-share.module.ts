import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookValuePerShareRoutingModule } from './book-value-per-share-routing.module';
import { BookValuePerShareComponent } from './book-value-per-share.component';
import { BookValuePerShareValComponent } from './book-value-per-share-val/book-value-per-share-val.component';
import { FormulaDefinitionModule } from '../../../components/formula-definition/formula-definition.module';

@NgModule({
  declarations: [BookValuePerShareComponent, BookValuePerShareValComponent],
  imports: [
    CommonModule,
    BookValuePerShareRoutingModule,
    FormulaDefinitionModule
  ]
})
export class BookValuePerShareModule { }
