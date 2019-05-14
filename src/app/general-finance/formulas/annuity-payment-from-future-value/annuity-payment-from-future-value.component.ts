import { GeneralFormulaDefinationService } from './../../../_service/formula/general-formula-defination.service';
import { FormulaDefination } from './../../../_models/formula/formula-defination';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-annuity-payment-from-future-value',
  templateUrl: './annuity-payment-from-future-value.component.html',
  styleUrls: ['./annuity-payment-from-future-value.component.scss']
})
export class AnnuityPaymentFromFutureValueComponent implements OnInit {

  formulaDefination: FormulaDefination;

  constructor(private formulaDefinationService: GeneralFormulaDefinationService) { }

  ngOnInit() {
    this.formulaDefination = this.formulaDefinationService.getAnnuityPaymentFromFutureValueDef();
  }

}
