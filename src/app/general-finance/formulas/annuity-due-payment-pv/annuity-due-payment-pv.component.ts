import { GeneralFormulaDefinitionService } from './../../../_service/formula/general-formula-definition.service';
import { Component, OnInit } from '@angular/core';
import { FormulaDefinition } from './../../../_models/formula/formula-definition';

@Component({
  selector: 'app-annuity-due-payment-pv',
  templateUrl: './annuity-due-payment-pv.component.html',
  styleUrls: ['./annuity-due-payment-pv.component.scss']
})
export class AnnuityDuePaymentPvComponent implements OnInit {

  formulaDefinition: FormulaDefinition;

  constructor(private formulaDefinitionService: GeneralFormulaDefinitionService) { }

  ngOnInit() {
    this.formulaDefinition = this.formulaDefinitionService.getAnnuityDuePaymentPvDef();
  }

}
