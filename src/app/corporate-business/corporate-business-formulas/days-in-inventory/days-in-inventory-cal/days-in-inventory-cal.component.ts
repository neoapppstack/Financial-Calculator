import { FormulaDefinition } from './../../../../_models/formula/formula-definition';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-days-in-inventory-cal',
  templateUrl: './days-in-inventory-cal.component.html',
  styleUrls: ['./days-in-inventory-cal.component.scss']
})
export class DaysInInventoryCalComponent implements OnInit {

  @Input() formulaDefinition: FormulaDefinition;

  constructor() { }

  ngOnInit() {
  }

}
