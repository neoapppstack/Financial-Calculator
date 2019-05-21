import { FormulaDefination } from './../../../../_models/formula/formula-defination';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-earnings-per-share-cal',
  templateUrl: './earnings-per-share-cal.component.html',
  styleUrls: ['./earnings-per-share-cal.component.scss']
})
export class EarningsPerShareCalComponent implements OnInit {

  @Input() formulaDefination: FormulaDefination;

  constructor() { }

  ngOnInit() {
  }

}
