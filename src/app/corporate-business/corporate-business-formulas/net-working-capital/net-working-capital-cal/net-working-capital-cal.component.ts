import { FormulaDefinition } from './../../../../_models/formula/formula-definition';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-net-working-capital-cal',
  templateUrl: './net-working-capital-cal.component.html',
  styleUrls: ['./net-working-capital-cal.component.scss']
})
export class NetWorkingCapitalCalComponent implements OnInit {

  @Input() formulaDefinition: FormulaDefinition;

  constructor() { }

  ngOnInit() {
  }

}
