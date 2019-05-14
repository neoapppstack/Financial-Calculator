import { Component, OnInit } from '@angular/core';
import { FormulaDefination } from './../../../_models/formula/formula-defination';

@Component({
  selector: 'app-doubling-time-simple-interest',
  templateUrl: './doubling-time-simple-interest.component.html',
  styleUrls: ['./doubling-time-simple-interest.component.scss']
})
export class DoublingTimeSimpleInterestComponent implements OnInit {

  formulaDefination: FormulaDefination;

  constructor() { }

  ngOnInit() {
  }

}
