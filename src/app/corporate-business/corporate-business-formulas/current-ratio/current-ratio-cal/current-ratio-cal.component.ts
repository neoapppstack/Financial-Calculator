import { FormulaDefinition } from './../../../../_models/formula/formula-definition';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-current-ratio-cal',
  templateUrl: './current-ratio-cal.component.html',
  styleUrls: ['./current-ratio-cal.component.scss']
})
export class CurrentRatioCalComponent implements OnInit {

  @Input() formulaDefinition: FormulaDefinition;

  constructor() { }

  ngOnInit() {
  }

}
