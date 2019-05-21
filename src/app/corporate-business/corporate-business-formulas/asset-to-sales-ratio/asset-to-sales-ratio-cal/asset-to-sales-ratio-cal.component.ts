import { FormulaDefination } from './../../../../_models/formula/formula-defination';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-asset-to-sales-ratio-cal',
  templateUrl: './asset-to-sales-ratio-cal.component.html',
  styleUrls: ['./asset-to-sales-ratio-cal.component.scss']
})
export class AssetToSalesRatioCalComponent implements OnInit {

  @Input() formulaDefination: FormulaDefination;

  constructor() { }

  ngOnInit() {
  }

}
