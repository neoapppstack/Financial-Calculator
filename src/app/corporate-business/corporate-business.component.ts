import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../_service/navbar/header.service';

@Component({
  selector: 'app-corporate-business',
  templateUrl: './corporate-business.component.html',
  styleUrls: ['./corporate-business.component.scss']
})
export class CorporateBusinessComponent implements OnInit {

  constructor(private header: HeaderService) { }

  ngOnInit() {
    this.header.changeHeader('CORPORATE BUSINESS');
  }

}
