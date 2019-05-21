import { FormulaDefinition } from './../../../../_models/formula/formula-definition';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-debt-ratio-cal',
  templateUrl: './debt-ratio-cal.component.html',
  styleUrls: ['./debt-ratio-cal.component.scss']
})
export class DebtRatioCalComponent implements OnInit {

  @Input() formulaDefinition: FormulaDefinition;

  constructor() { }

  ngOnInit() {
  }

}
