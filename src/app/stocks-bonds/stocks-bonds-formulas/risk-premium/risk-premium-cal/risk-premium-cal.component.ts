import { FormulaDefinition } from './../../../../_models/formula/formula-definition';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-risk-premium-cal',
  templateUrl: './risk-premium-cal.component.html',
  styleUrls: ['./risk-premium-cal.component.scss']
})
export class RiskPremiumCalComponent implements OnInit {

  @Input() formulaDefinition: FormulaDefinition;

  constructor() { }

  ngOnInit() {
  }

}
