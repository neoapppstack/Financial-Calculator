import { FormulaDefination } from './../../../../_models/formula/formula-defination';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-future-value-factor-cal',
  templateUrl: './future-value-factor-cal.component.html',
  styleUrls: ['./future-value-factor-cal.component.scss']
})
export class FutureValueFactorCalComponent implements OnInit {

  @Input() formulaDefination: FormulaDefination;

  constructor() { }

  ngOnInit() {
  }

}
