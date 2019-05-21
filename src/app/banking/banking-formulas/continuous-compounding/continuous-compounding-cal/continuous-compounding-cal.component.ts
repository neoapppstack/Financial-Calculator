import { FormulaDefinition } from './../../../../_models/formula/formula-definition';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-continuous-compounding-cal',
  templateUrl: './continuous-compounding-cal.component.html',
  styleUrls: ['./continuous-compounding-cal.component.scss']
})
export class ContinuousCompoundingCalComponent implements OnInit {

  @Input() formulaDefinition: FormulaDefinition;

  constructor() { }

  ngOnInit() {
  }

}
