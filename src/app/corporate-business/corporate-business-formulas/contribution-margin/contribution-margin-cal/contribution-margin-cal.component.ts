import { FormulaDefinition } from './../../../../_models/formula/formula-definition';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contribution-margin-cal',
  templateUrl: './contribution-margin-cal.component.html',
  styleUrls: ['./contribution-margin-cal.component.scss']
})
export class ContributionMarginCalComponent implements OnInit {

  @Input() formulaDefinition: FormulaDefinition;

  constructor() { }

  ngOnInit() {
  }

}
