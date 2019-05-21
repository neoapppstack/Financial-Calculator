import { FormulaDefinition } from './../../../../_models/formula/formula-definition';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-present-value-of-annuity-due-cal',
  templateUrl: './present-value-of-annuity-due-cal.component.html',
  styleUrls: ['./present-value-of-annuity-due-cal.component.scss']
})
export class PresentValueOfAnnuityDueCalComponent implements OnInit {

  @Input() formulaDefinition: FormulaDefinition;

  constructor() { }

  ngOnInit() {
  }

}
