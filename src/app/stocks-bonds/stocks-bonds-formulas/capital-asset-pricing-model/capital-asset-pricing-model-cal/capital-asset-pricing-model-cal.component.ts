import { FormulaDefinition } from './../../../../_models/formula/formula-definition';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-capital-asset-pricing-model-cal',
  templateUrl: './capital-asset-pricing-model-cal.component.html',
  styleUrls: ['./capital-asset-pricing-model-cal.component.scss']
})
export class CapitalAssetPricingModelCalComponent implements OnInit {

  @Input() formulaDefinition: FormulaDefinition;

  constructor() { }

  ngOnInit() {
  }

}
