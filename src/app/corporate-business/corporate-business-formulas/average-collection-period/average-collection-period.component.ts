import { CorporateFormulaDefinationService } from './../../../_service/formula/corporate-formula-defination.service';
import { FormulaDefination } from './../../../_models/formula/formula-defination';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-average-collection-period',
  templateUrl: './average-collection-period.component.html',
  styleUrls: ['./average-collection-period.component.scss']
})
export class AverageCollectionPeriodComponent implements OnInit {

  formulaDefination: FormulaDefination;

  constructor(
    private formulaDefinationService: CorporateFormulaDefinationService
  ) { }

  ngOnInit() {
    this.formulaDefination = this.formulaDefinationService.getAverageCollectionPeriodDef();
  }

}
