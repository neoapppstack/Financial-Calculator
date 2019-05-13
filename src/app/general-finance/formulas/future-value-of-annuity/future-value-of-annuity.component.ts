import { FormulaDefination } from './../../../_models/formula/formula-defination';
import { GeneralFormulaDefinationService } from './../../../_service/formula/general-formula-defination.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-future-value-of-annuity',
  templateUrl: './future-value-of-annuity.component.html',
  styleUrls: ['./future-value-of-annuity.component.scss']
})
export class FutureValueOfAnnuityComponent implements OnInit {

  formulaDefination: FormulaDefination;

  constructor(private formulaDefinationService: GeneralFormulaDefinationService ) { }

  ngOnInit() {
    this.formulaDefination = this.formulaDefinationService.getFutureValueOfAnnuityDef();
  }

}
