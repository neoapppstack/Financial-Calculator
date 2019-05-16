import { FormulaDefination } from './../../../../_models/formula/formula-defination';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-doubling-time-continuous-compounding-cal',
  templateUrl: './doubling-time-continuous-compounding-cal.component.html',
  styleUrls: ['./doubling-time-continuous-compounding-cal.component.scss']
})
export class DoublingTimeContinuousCompoundingCalComponent implements OnInit {

  @Input() formulaDefination: FormulaDefination;

  constructor() { }

  ngOnInit() {
  }

}
