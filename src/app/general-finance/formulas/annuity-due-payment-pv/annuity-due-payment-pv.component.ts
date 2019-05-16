import { GeneralFormulaDefinationService } from './../../../_service/formula/general-formula-defination.service';
import { Component, OnInit } from '@angular/core';
import { FormulaDefination } from './../../../_models/formula/formula-defination';

@Component({
  selector: 'app-annuity-due-payment-pv',
  templateUrl: './annuity-due-payment-pv.component.html',
  styleUrls: ['./annuity-due-payment-pv.component.scss']
})
export class AnnuityDuePaymentPvComponent implements OnInit {

  formulaDefination: FormulaDefination;

  constructor(private formulaDefinationService: GeneralFormulaDefinationService) { }

  ngOnInit() {
    this.formulaDefination = this.formulaDefinationService.getAnnuityDuePaymentPvDef();
  }

}
