import { FormulaDefination } from './../../_models/formula/formula-defination';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-formula-defination',
  templateUrl: './formula-defination.component.html',
  styleUrls: ['./formula-defination.component.scss']
})
export class FormulaDefinationComponent implements OnInit {

  @Input() formulaDefination: FormulaDefination;

  constructor() { }

  ngOnInit() {
  }

}
