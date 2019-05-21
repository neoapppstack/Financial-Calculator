import { FormulaDefination } from './../../../../_models/formula/formula-defination';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-equity-multiplier-cal',
  templateUrl: './equity-multiplier-cal.component.html',
  styleUrls: ['./equity-multiplier-cal.component.scss']
})
export class EquityMultiplierCalComponent implements OnInit {

  @Input() formulaDefination: FormulaDefination;

  constructor() { }

  ngOnInit() {
  }

}
