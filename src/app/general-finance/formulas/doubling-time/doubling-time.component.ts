import { Component, OnInit } from '@angular/core';
import { FormulaDefination } from './../../../_models/formula/formula-defination';

@Component({
  selector: 'app-doubling-time',
  templateUrl: './doubling-time.component.html',
  styleUrls: ['./doubling-time.component.scss']
})
export class DoublingTimeComponent implements OnInit {

  formulaDefination: FormulaDefination;

  constructor() { }

  ngOnInit() {
  }

}
