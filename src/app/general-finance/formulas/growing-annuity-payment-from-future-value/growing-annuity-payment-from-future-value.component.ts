import { GeneralFormulaDefinationService } from './../../../_service/formula/general-formula-defination.service';
import { Component, OnInit } from '@angular/core';
import { FormulaDefination } from './../../../_models/formula/formula-defination';

@Component({
  selector: 'app-growing-annuity-payment-from-future-value',
  templateUrl: './growing-annuity-payment-from-future-value.component.html',
  styleUrls: ['./growing-annuity-payment-from-future-value.component.scss']
})
export class GrowingAnnuityPaymentFromFutureValueComponent implements OnInit {

  formulaDefination: FormulaDefination;

  constructor(
    private formulaDefinationService: GeneralFormulaDefinationService
  ) { }

  ngOnInit() {
    this.formulaDefination = this.formulaDefinationService.getGrowingAnnuityPaymentFromFutureValueDef();
  }

}
