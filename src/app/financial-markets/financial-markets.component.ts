import { Router } from '@angular/router';
import { FormulaService } from './../_service/formula/formula.service';
import { FormulaData } from './../_models/formula/formula-data';
import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../_service/navbar/header.service';

@Component({
  selector: 'app-financial-markets',
  templateUrl: './financial-markets.component.html',
  styleUrls: ['./financial-markets.component.scss']
})
export class FinancialMarketsComponent implements OnInit {

  financialMarketFormulaList: FormulaData[];

  constructor(
    private router: Router,
    private header: HeaderService,
    private formulaService: FormulaService) { }

  ngOnInit() {
    this.header.changeHeader('FINANCIAL MARKET');
    this.financialMarketFormulaList = this.formulaService.getFinancialFormulas();
  }

}
