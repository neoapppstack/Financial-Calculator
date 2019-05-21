import { FormulaDefination } from './../../../../_models/formula/formula-defination';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dividend-yield-cal',
  templateUrl: './dividend-yield-cal.component.html',
  styleUrls: ['./dividend-yield-cal.component.scss']
})
export class DividendYieldCalComponent implements OnInit {

  @Input() formulaDefination: FormulaDefination;

  constructor() { }

  ngOnInit() {
  }

}
