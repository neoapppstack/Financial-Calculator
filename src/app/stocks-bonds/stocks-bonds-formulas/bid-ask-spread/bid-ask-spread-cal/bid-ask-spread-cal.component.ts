import { FormulaDefination } from './../../../../_models/formula/formula-defination';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bid-ask-spread-cal',
  templateUrl: './bid-ask-spread-cal.component.html',
  styleUrls: ['./bid-ask-spread-cal.component.scss']
})
export class BidAskSpreadCalComponent implements OnInit {

  @Input() formulaDefination: FormulaDefination;

  constructor() { }

  ngOnInit() {
  }

}
