import { FormulaDefination } from './../../../../_models/formula/formula-defination';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-net-present-value-cal',
  templateUrl: './net-present-value-cal.component.html',
  styleUrls: ['./net-present-value-cal.component.scss']
})
export class NetPresentValueCalComponent implements OnInit {

  @Input() formulaDefination: FormulaDefination;

  constructor() { }

  ngOnInit() {
  }

}
