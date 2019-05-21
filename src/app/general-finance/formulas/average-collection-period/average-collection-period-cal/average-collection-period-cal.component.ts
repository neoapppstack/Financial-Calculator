import { FormulaDefinition } from './../../../../_models/formula/formula-definition';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-average-collection-period-cal',
  templateUrl: './average-collection-period-cal.component.html',
  styleUrls: ['./average-collection-period-cal.component.scss']
})
export class AverageCollectionPeriodCalComponent implements OnInit {

  @Input() formulaDefinition: FormulaDefinition;

  constructor() { }

  ngOnInit() {
  }

}
