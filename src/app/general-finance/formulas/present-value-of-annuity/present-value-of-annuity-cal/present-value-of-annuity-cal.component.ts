import { FormulaDefinition } from './../../../../_models/formula/formula-definition';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-present-value-of-annuity-cal',
  templateUrl: './present-value-of-annuity-cal.component.html',
  styleUrls: ['./present-value-of-annuity-cal.component.scss']
})
export class PresentValueOfAnnuityCalComponent implements OnInit {

  @Input() formulaDefinition: FormulaDefinition;

  constructor() { }

  ngOnInit() {
  }

}
