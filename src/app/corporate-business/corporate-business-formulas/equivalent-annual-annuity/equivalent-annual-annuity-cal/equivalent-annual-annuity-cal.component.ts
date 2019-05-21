import { FormulaDefinition } from './../../../../_models/formula/formula-definition';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-equivalent-annual-annuity-cal',
  templateUrl: './equivalent-annual-annuity-cal.component.html',
  styleUrls: ['./equivalent-annual-annuity-cal.component.scss']
})
export class EquivalentAnnualAnnuityCalComponent implements OnInit {

  @Input() formulaDefinition: FormulaDefinition;

  constructor() { }

  ngOnInit() {
  }

}
