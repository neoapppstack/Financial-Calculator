import { FormulaDefinition } from './../../../../_models/formula/formula-definition';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rate-of-inflation-cal',
  templateUrl: './rate-of-inflation-cal.component.html',
  styleUrls: ['./rate-of-inflation-cal.component.scss']
})
export class RateOfInflationCalComponent implements OnInit {

  @Input() formulaDefinition: FormulaDefinition;

  constructor() { }

  ngOnInit() {
  }

}
