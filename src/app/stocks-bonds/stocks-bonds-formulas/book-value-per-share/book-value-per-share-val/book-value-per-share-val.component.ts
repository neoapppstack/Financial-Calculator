import { FormulaDefinition } from './../../../../_models/formula/formula-definition';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-book-value-per-share-val',
  templateUrl: './book-value-per-share-val.component.html',
  styleUrls: ['./book-value-per-share-val.component.scss']
})
export class BookValuePerShareValComponent implements OnInit {

  @Input() formulaDefinition: FormulaDefinition;

  constructor() { }

  ngOnInit() {
  }

}
