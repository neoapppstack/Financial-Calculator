import { FormulaDefination } from './../../../_models/formula/formula-defination';
import { GeneralFormulaDefinationService } from './../../../_service/formula/general-formula-defination.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-annuity-payment-formula',
  templateUrl: './annuity-payment-formula.component.html',
  styleUrls: ['./annuity-payment-formula.component.scss']
})
export class AnnuityPaymentFormulaComponent implements OnInit {

  formulaDefination: FormulaDefination;

  constructor(private formulaDefinationService: GeneralFormulaDefinationService) { }

  ngOnInit() {
    this.formulaDefination = this.formulaDefinationService.getAnnuityPaymentFormulaDef();
  }

}
