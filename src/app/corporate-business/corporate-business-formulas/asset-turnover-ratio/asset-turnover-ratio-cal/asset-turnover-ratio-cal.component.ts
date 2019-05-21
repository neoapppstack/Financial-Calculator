import { FormulaDefinition } from './../../../../_models/formula/formula-definition';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-asset-turnover-ratio-cal',
  templateUrl: './asset-turnover-ratio-cal.component.html',
  styleUrls: ['./asset-turnover-ratio-cal.component.scss']
})
export class AssetTurnoverRatioCalComponent implements OnInit {

  @Input() formulaDefinition: FormulaDefinition;

  constructor() { }

  ngOnInit() {
  }

}
