import { FormulaDefinition } from './../../../../_models/formula/formula-definition';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-future-value-of-growing-annuity-cal',
  templateUrl: './future-value-of-growing-annuity-cal.component.html',
  styleUrls: ['./future-value-of-growing-annuity-cal.component.scss']
})
export class FutureValueOfGrowingAnnuityCalComponent implements OnInit {

  @Input() formulaDefinition: FormulaDefinition;

  constructor() { }

  ngOnInit() {
  }

}
