import { Router } from '@angular/router';
import { FormulaService } from './../_service/formula/formula.service';
import { FormulaData } from './../_models/formula/formula-data';
import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../_service/navbar/header.service';

@Component({
  selector: 'app-stocks-bonds',
  templateUrl: './stocks-bonds.component.html',
  styleUrls: ['./stocks-bonds.component.scss']
})
export class StocksBondsComponent implements OnInit {

  stocksBondsFormulaList: FormulaData[];

  constructor(
    private router: Router,
    private header: HeaderService,
    private formulaService: FormulaService) { }

  ngOnInit() {
    this.header.changeHeader('STOCKS/BONDS');
    this.stocksBondsFormulaList = this.formulaService.getStocksFormulas();
  }

}
