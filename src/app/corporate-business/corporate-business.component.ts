import { Router } from '@angular/router';
import { FormulaService } from './../_service/formula/formula.service';
import { FormulaData } from './../_models/formula/formula-data';
import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../_service/navbar/header.service';

@Component({
  selector: 'app-corporate-business',
  templateUrl: './corporate-business.component.html',
  styleUrls: ['./corporate-business.component.scss']
})
export class CorporateBusinessComponent implements OnInit {

  corporateBusinessFormulaList: FormulaData[];

  constructor(
    private router: Router,
    private header: HeaderService,
    private formulaService: FormulaService) { }

  ngOnInit() {
    this.header.changeHeader('CORPORATE BUSINESS');
    this.corporateBusinessFormulaList = this.formulaService.getCorporateFormulas();
  }

}
