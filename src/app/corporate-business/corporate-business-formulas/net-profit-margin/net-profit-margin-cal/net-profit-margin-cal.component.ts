import { FormulaDefinition } from './../../../../_models/formula/formula-definition';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-net-profit-margin-cal',
  templateUrl: './net-profit-margin-cal.component.html',
  styleUrls: ['./net-profit-margin-cal.component.scss']
})
export class NetProfitMarginCalComponent implements OnInit {

  @Input() formulaDefinition: FormulaDefinition;

  constructor() { }

  ngOnInit() {
  }

}
