import { FormulaDefination } from './../../../../_models/formula/formula-defination';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-asset-turnover-ratio-cal',
  templateUrl: './asset-turnover-ratio-cal.component.html',
  styleUrls: ['./asset-turnover-ratio-cal.component.scss']
})
export class AssetTurnoverRatioCalComponent implements OnInit {

  @Input() formulaDefination: FormulaDefination;

  constructor() { }

  ngOnInit() {
  }

}
