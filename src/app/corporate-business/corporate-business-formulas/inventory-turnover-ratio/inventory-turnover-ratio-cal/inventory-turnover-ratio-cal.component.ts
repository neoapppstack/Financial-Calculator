import { FormulaDefinition } from './../../../../_models/formula/formula-definition';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-inventory-turnover-ratio-cal',
  templateUrl: './inventory-turnover-ratio-cal.component.html',
  styleUrls: ['./inventory-turnover-ratio-cal.component.scss']
})
export class InventoryTurnoverRatioCalComponent implements OnInit {

  @Input() formulaDefinition: FormulaDefinition;

  constructor() { }

  ngOnInit() {
  }

}
