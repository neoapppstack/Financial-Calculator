import { CorporateFormulaDefinationService } from './../../../_service/formula/corporate-formula-defination.service';
import { FormulaDefination } from './../../../_models/formula/formula-defination';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-days-in-inventory',
  templateUrl: './days-in-inventory.component.html',
  styleUrls: ['./days-in-inventory.component.scss']
})
export class DaysInInventoryComponent implements OnInit {

  formulaDefination: FormulaDefination;

  constructor(
    private formulaDefinationService: CorporateFormulaDefinationService
  ) { }

  ngOnInit() {
    this.formulaDefination = this.formulaDefinationService.getDaysInInventoryDef();
  }

}
