import { GeneralFormulaDefinitionService } from './../../../_service/formula/general-formula-definition.service';
import { FormulaDefinition } from './../../../_models/formula/formula-definition';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-annuity-payment-from-future-value',
  templateUrl: './annuity-payment-from-future-value.component.html',
  styleUrls: ['./annuity-payment-from-future-value.component.scss']
})
export class AnnuityPaymentFromFutureValueComponent implements OnInit {

  formulaDefinition: FormulaDefinition;

  constructor(private formulaDefinitionService: GeneralFormulaDefinitionService) { }

  ngOnInit() {
    this.formulaDefinition = this.formulaDefinitionService.getAnnuityPaymentFromFutureValueDef();
  }

}
