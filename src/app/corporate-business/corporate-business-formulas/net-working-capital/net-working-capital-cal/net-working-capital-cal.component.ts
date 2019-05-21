import { FormulaDefination } from './../../../../_models/formula/formula-defination';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-net-working-capital-cal',
  templateUrl: './net-working-capital-cal.component.html',
  styleUrls: ['./net-working-capital-cal.component.scss']
})
export class NetWorkingCapitalCalComponent implements OnInit {

  @Input() formulaDefination: FormulaDefination;

  constructor() { }

  ngOnInit() {
  }

}
