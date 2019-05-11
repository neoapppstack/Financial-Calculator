import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from '../_service/navbar/header.service';
import { FormulaData } from '../_models/formula/formula-data';
import { FormulaService } from '../_service/formula/formula.service';

@Component({
  selector: 'app-general-finance',
  templateUrl: './general-finance.component.html',
  styleUrls: ['./general-finance.component.scss']
})
export class GeneralFinanceComponent implements OnInit {

  generalFormulaList: FormulaData[] = [];

  constructor(
    private router: Router,
    private header: HeaderService,
    private formulaService: FormulaService
    ) {
      this.generalFormulaList = this.formulaService.getGeneralFormula();
      console.log(this.generalFormulaList);
    }

  ngOnInit() {
    this.header.changeHeader('GENERAL FINANCE');

  }

  navidateToRoute(url: String) {
    this.router.navigate([url]);
  }

}
