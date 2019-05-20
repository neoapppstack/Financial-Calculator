import { FormulaDefination } from './../../../../_models/formula/formula-defination';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rate-of-inflation-cal',
  templateUrl: './rate-of-inflation-cal.component.html',
  styleUrls: ['./rate-of-inflation-cal.component.scss']
})
export class RateOfInflationCalComponent implements OnInit {

  @Input() formulaDefination: FormulaDefination;

  constructor() { }

  ngOnInit() {
  }

}
