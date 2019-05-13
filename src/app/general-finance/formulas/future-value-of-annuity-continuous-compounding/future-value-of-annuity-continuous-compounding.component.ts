import { GeneralFormulaDefinationService } from './../../../_service/formula/general-formula-defination.service';
import { FormulaDefination } from './../../../_models/formula/formula-defination';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-future-value-of-annuity-continuous-compounding',
  templateUrl: './future-value-of-annuity-continuous-compounding.component.html',
  styleUrls: ['./future-value-of-annuity-continuous-compounding.component.scss']
})
export class FutureValueOfAnnuityContinuousCompoundingComponent implements OnInit {

  formulaDefination: FormulaDefination;

  constructor(private formulaDefinationService: GeneralFormulaDefinationService ) { }

  ngOnInit() {
    this.formulaDefination = this.formulaDefinationService.getFutureValueOfAnnuityContinuousCompoundingDef();
  }

}
