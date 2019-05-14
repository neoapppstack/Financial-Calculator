import { Component, OnInit } from '@angular/core';
import { FormulaDefination } from './../../../_models/formula/formula-defination';

@Component({
  selector: 'app-present-value',
  templateUrl: './present-value.component.html',
  styleUrls: ['./present-value.component.scss']
})
export class PresentValueComponent implements OnInit {

  formulaDefination: FormulaDefination;

  constructor() { }

  ngOnInit() {
  }

}
