import { FormulaDefinition } from './../../../../_models/formula/formula-definition';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dividends-per-share-cal',
  templateUrl: './dividends-per-share-cal.component.html',
  styleUrls: ['./dividends-per-share-cal.component.scss']
})
export class DividendsPerShareCalComponent implements OnInit {

  @Input() formulaDefinition: FormulaDefinition;

  constructor() { }

  ngOnInit() {
  }

}
