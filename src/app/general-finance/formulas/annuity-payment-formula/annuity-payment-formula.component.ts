import { FormulaDefinition } from './../../../_models/formula/formula-definition';
import { GeneralFormulaDefinitionService } from './../../../_service/formula/general-formula-definition.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-annuity-payment-formula',
  templateUrl: './annuity-payment-formula.component.html',
  styleUrls: ['./annuity-payment-formula.component.scss']
})
export class AnnuityPaymentFormulaComponent implements OnInit {

  formulaDefinition: FormulaDefinition;

  constructor(private formulaDefinitionService: GeneralFormulaDefinitionService) { }

  ngOnInit() {
    this.formulaDefinition = this.formulaDefinitionService.getAnnuityPaymentFormulaDef();
  }

}
