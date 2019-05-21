import { FormulaDefinition } from './../../../../_models/formula/formula-definition';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-return-on-equity-cal',
  templateUrl: './return-on-equity-cal.component.html',
  styleUrls: ['./return-on-equity-cal.component.scss']
})
export class ReturnOnEquityCalComponent implements OnInit {

  @Input() formulaDefinition: FormulaDefinition;

  constructor() { }

  ngOnInit() {
  }

}
