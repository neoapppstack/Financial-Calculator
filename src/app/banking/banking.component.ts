import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../_service/navbar/header.service';

@Component({
  selector: 'app-banking',
  templateUrl: './banking.component.html',
  styleUrls: ['./banking.component.scss']
})
export class BankingComponent implements OnInit {

  constructor(private header: HeaderService) { }

  ngOnInit() {
    this.header.changeHeader('BANKING');
  }

}
