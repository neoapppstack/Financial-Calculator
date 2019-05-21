import { FormulaDefinition } from './../../../../_models/formula/formula-definition';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-compound-interest-cal',
  templateUrl: './compound-interest-cal.component.html',
  styleUrls: ['./compound-interest-cal.component.scss']
})
export class CompoundInterestCalComponent implements OnInit {

  @Input() formulaDefinition: FormulaDefinition;

  constructor() { }

  ngOnInit() {
  }

}
