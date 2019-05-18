import { FormulaData } from './../_models/formula/formula-data';
import { FormulaService } from './../_service/formula/formula.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../_service/navbar/header.service';

@Component({
  selector: 'app-banking',
  templateUrl: './banking.component.html',
  styleUrls: ['./banking.component.scss']
})
export class BankingComponent implements OnInit {

  bankingFormulaList: FormulaData[] = [];

  constructor(
    private router: Router,
    private header: HeaderService,
    private formulaService: FormulaService) { }

  ngOnInit() {
    this.header.changeHeader('BANKING');
    this.bankingFormulaList = this.formulaService.getBankingFormulas();
  }

}
