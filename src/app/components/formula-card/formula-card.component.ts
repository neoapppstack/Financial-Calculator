import { Component, OnInit, Input } from '@angular/core';
import { FormulaData } from './../../_models/formula/formula-data';

@Component({
  selector: 'app-formula-card',
  templateUrl: './formula-card.component.html',
  styleUrls: ['./formula-card.component.scss']
})
export class FormulaCardComponent implements OnInit {

  constructor() { }

  @Input() formulaData: FormulaData;

  ngOnInit() {
  }

}
