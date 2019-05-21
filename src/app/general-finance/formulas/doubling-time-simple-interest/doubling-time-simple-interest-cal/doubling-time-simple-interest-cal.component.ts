import { FormulaDefinition } from './../../../../_models/formula/formula-definition';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-doubling-time-simple-interest-cal',
  templateUrl: './doubling-time-simple-interest-cal.component.html',
  styleUrls: ['./doubling-time-simple-interest-cal.component.scss']
})
export class DoublingTimeSimpleInterestCalComponent implements OnInit {

  @Input() formulaDefinition: FormulaDefinition;

  constructor() { }

  ngOnInit() {
  }

}
