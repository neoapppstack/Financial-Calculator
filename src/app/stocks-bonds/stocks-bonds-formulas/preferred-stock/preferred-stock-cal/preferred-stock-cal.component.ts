import { FormulaDefination } from './../../../../_models/formula/formula-defination';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-preferred-stock-cal',
  templateUrl: './preferred-stock-cal.component.html',
  styleUrls: ['./preferred-stock-cal.component.scss']
})
export class PreferredStockCalComponent implements OnInit {

  @Input() formulaDefination: FormulaDefination;

  constructor() { }

  ngOnInit() {
  }

}
