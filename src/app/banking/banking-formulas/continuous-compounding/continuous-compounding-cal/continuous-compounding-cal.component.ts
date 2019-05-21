import { FormulaDefination } from './../../../../_models/formula/formula-defination';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-continuous-compounding-cal',
  templateUrl: './continuous-compounding-cal.component.html',
  styleUrls: ['./continuous-compounding-cal.component.scss']
})
export class ContinuousCompoundingCalComponent implements OnInit {

  @Input() formulaDefination: FormulaDefination;

  constructor() { }

  ngOnInit() {
  }

}
