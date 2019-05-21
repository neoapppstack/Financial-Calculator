import { FormulaDefination } from './../../../../_models/formula/formula-defination';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tax-equivalent-yield-cal',
  templateUrl: './tax-equivalent-yield-cal.component.html',
  styleUrls: ['./tax-equivalent-yield-cal.component.scss']
})
export class TaxEquivalentYieldCalComponent implements OnInit {

  @Input() formulaDefination: FormulaDefination;

  constructor() { }

  ngOnInit() {
  }

}
