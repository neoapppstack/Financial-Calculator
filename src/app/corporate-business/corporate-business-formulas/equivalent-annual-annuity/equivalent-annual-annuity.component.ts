import { CorporateFormulaDefinationService } from './../../../_service/formula/corporate-formula-defination.service';
import { FormulaDefination } from './../../../_models/formula/formula-defination';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-equivalent-annual-annuity',
  templateUrl: './equivalent-annual-annuity.component.html',
  styleUrls: ['./equivalent-annual-annuity.component.scss']
})
export class EquivalentAnnualAnnuityComponent implements OnInit {

  formulaDefination: FormulaDefination;

  constructor(
    private formulaDefinationService: CorporateFormulaDefinationService
  ) { }

  ngOnInit() {
    this.formulaDefination = this.formulaDefinationService.getEquivalentAnnualAnnuityDef();
  }

}
