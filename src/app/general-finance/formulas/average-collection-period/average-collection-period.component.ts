import { GeneralFormulaDefinationService } from './../../../_service/formula/general-formula-defination.service';
import { Component, OnInit } from '@angular/core';
import { FormulaDefination } from './../../../_models/formula/formula-defination';

@Component({
  selector: 'app-average-collection-period',
  templateUrl: './average-collection-period.component.html',
  styleUrls: ['./average-collection-period.component.scss']
})
export class AverageCollectionPeriodComponent implements OnInit {

  formulaDefination: FormulaDefination;

  constructor(private formulaDefinationService: GeneralFormulaDefinationService) { }

  ngOnInit() {
    this.formulaDefination = this.formulaDefinationService.getAverageCollectionPeriodDef();
  }

}
