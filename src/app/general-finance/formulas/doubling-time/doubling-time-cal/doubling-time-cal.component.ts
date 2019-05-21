import { FormulaDefinition } from './../../../../_models/formula/formula-definition';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-doubling-time-cal',
  templateUrl: './doubling-time-cal.component.html',
  styleUrls: ['./doubling-time-cal.component.scss']
})
export class DoublingTimeCalComponent implements OnInit {

  @Input() formulaDefinition: FormulaDefinition;

  constructor() { }

  ngOnInit() {
  }

}
