import { FormulaDefination } from './../../../../_models/formula/formula-defination';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-present-value-of-growing-perpetuity-cal',
  templateUrl: './present-value-of-growing-perpetuity-cal.component.html',
  styleUrls: ['./present-value-of-growing-perpetuity-cal.component.scss']
})
export class PresentValueOfGrowingPerpetuityCalComponent implements OnInit {

  @Input() formulaDefination: FormulaDefination;

  constructor() { }

  ngOnInit() {
  }

}
