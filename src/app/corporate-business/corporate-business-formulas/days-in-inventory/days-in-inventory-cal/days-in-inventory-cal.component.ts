import { FormulaDefination } from './../../../../_models/formula/formula-defination';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-days-in-inventory-cal',
  templateUrl: './days-in-inventory-cal.component.html',
  styleUrls: ['./days-in-inventory-cal.component.scss']
})
export class DaysInInventoryCalComponent implements OnInit {

  @Input() formulaDefination: FormulaDefination;

  constructor() { }

  ngOnInit() {
  }

}
