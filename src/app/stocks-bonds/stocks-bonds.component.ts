import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../_service/navbar/header.service';

@Component({
  selector: 'app-stocks-bonds',
  templateUrl: './stocks-bonds.component.html',
  styleUrls: ['./stocks-bonds.component.scss']
})
export class StocksBondsComponent implements OnInit {

  constructor(private header: HeaderService) { }

  ngOnInit() {
    this.header.changeHeader('STOCKS/BONDS');
  }

}
