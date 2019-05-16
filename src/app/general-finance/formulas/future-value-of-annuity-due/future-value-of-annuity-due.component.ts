import { GeneralFormulaDefinationService } from './../../../_service/formula/general-formula-defination.service';
import { Component, OnInit } from '@angular/core';
import { FormulaDefination } from './../../../_models/formula/formula-defination';

@Component({
  selector: 'app-future-value-of-annuity-due',
  templateUrl: './future-value-of-annuity-due.component.html',
  styleUrls: ['./future-value-of-annuity-due.component.scss']
})
export class FutureValueOfAnnuityDueComponent implements OnInit {

  formulaDefination: FormulaDefination;

  constructor(
    private formulaDefinationService: GeneralFormulaDefinationService
  ) { }

  ngOnInit() {
    this.formulaDefination = this.formulaDefinationService.getFutureValueOfAnnuityDueDef();
  }

}
