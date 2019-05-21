import { GeneralFormulaDefinitionService } from './../../../_service/formula/general-formula-definition.service';
import { Component, OnInit } from '@angular/core';
import { FormulaDefinition } from './../../../_models/formula/formula-definition';

@Component({
  selector: 'app-growing-annuity-payment-from-future-value',
  templateUrl: './growing-annuity-payment-from-future-value.component.html',
  styleUrls: ['./growing-annuity-payment-from-future-value.component.scss']
})
export class GrowingAnnuityPaymentFromFutureValueComponent implements OnInit {

  formulaDefinition: FormulaDefinition;

  constructor(
    private formulaDefinitionService: GeneralFormulaDefinitionService
  ) { }

  ngOnInit() {
    this.formulaDefinition = this.formulaDefinitionService.getGrowingAnnuityPaymentFromFutureValueDef();
  }

}
