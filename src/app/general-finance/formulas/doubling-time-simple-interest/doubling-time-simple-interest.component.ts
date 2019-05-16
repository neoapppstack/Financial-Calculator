import { GeneralFormulaDefinationService } from './../../../_service/formula/general-formula-defination.service';
import { Component, OnInit } from '@angular/core';
import { FormulaDefination } from './../../../_models/formula/formula-defination';

@Component({
  selector: 'app-doubling-time-simple-interest',
  templateUrl: './doubling-time-simple-interest.component.html',
  styleUrls: ['./doubling-time-simple-interest.component.scss']
})
export class DoublingTimeSimpleInterestComponent implements OnInit {

  formulaDefination: FormulaDefination;

  constructor(
    private formulaDefinationService: GeneralFormulaDefinationService
  ) { }

  ngOnInit() {
    this.formulaDefination = this.formulaDefinationService.getDoublingTimeSimpleInterestDef();
  }

}
