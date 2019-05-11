import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../_service/navbar/header.service';

@Component({
  selector: 'app-financial-markets',
  templateUrl: './financial-markets.component.html',
  styleUrls: ['./financial-markets.component.scss']
})
export class FinancialMarketsComponent implements OnInit {

  constructor(private header: HeaderService) { }

  ngOnInit() {
    this.header.changeHeader('FINANCIAL MARKET');
  }

}
