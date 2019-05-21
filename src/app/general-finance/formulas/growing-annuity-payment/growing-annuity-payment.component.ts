import { GeneralFormulaDefinitionService } from './../../../_service/formula/general-formula-definition.service';
import { Component, OnInit } from '@angular/core';
import { FormulaDefinition } from './../../../_models/formula/formula-definition';

@Component({
  selector: 'app-growing-annuity-payment',
  templateUrl: './growing-annuity-payment.component.html',
  styleUrls: ['./growing-annuity-payment.component.scss']
})
export class GrowingAnnuityPaymentComponent implements OnInit {

  formulaDefinition: FormulaDefinition;

  constructor(
    private formulaDefinitionService: GeneralFormulaDefinitionService
  ) { }

  ngOnInit() {
    this.formulaDefinition = this.formulaDefinitionService.getGrowingAnnuityPaymentDef();
  }

}
