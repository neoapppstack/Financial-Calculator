import { FormulaDefinition } from './../../../../_models/formula/formula-definition';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-net-present-value-cal',
  templateUrl: './net-present-value-cal.component.html',
  styleUrls: ['./net-present-value-cal.component.scss']
})
export class NetPresentValueCalComponent implements OnInit {

  @Input() formulaDefinition: FormulaDefinition;

  constructor() { }

  ngOnInit() {
  }

}
