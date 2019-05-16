import { FormulaDefination } from './../../../../_models/formula/formula-defination';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-present-value-continuous-compounding-cal',
  templateUrl: './present-value-continuous-compounding-cal.component.html',
  styleUrls: ['./present-value-continuous-compounding-cal.component.scss']
})
export class PresentValueContinuousCompoundingCalComponent implements OnInit {

  @Input() formulaDefination: FormulaDefination;

  constructor() { }

  ngOnInit() {
  }

}
