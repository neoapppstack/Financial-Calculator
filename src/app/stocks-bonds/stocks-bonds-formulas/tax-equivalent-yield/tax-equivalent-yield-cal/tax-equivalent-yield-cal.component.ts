import { FormulaDefinition } from './../../../../_models/formula/formula-definition';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tax-equivalent-yield-cal',
  templateUrl: './tax-equivalent-yield-cal.component.html',
  styleUrls: ['./tax-equivalent-yield-cal.component.scss']
})
export class TaxEquivalentYieldCalComponent implements OnInit {

  @Input() formulaDefinition: FormulaDefinition;

  constructor() { }

  ngOnInit() {
  }

}
