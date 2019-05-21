import { FormulaDefinition } from './../../../../_models/formula/formula-definition';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-retention-ratio-cal',
  templateUrl: './retention-ratio-cal.component.html',
  styleUrls: ['./retention-ratio-cal.component.scss']
})
export class RetentionRatioCalComponent implements OnInit {

  @Input() formulaDefinition: FormulaDefinition;

  constructor() { }

  ngOnInit() {
  }

}
