import { Component, OnInit } from '@angular/core';
import { FormulaDefination } from './../../../_models/formula/formula-defination';

@Component({
  selector: 'app-perpetuity',
  templateUrl: './perpetuity.component.html',
  styleUrls: ['./perpetuity.component.scss']
})
export class PerpetuityComponent implements OnInit {

  formulaDefination: FormulaDefination;

  constructor() { }

  ngOnInit() {
  }

}
