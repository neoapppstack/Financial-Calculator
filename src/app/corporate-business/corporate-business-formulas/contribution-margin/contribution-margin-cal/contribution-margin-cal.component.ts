import { FormulaDefination } from './../../../../_models/formula/formula-defination';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contribution-margin-cal',
  templateUrl: './contribution-margin-cal.component.html',
  styleUrls: ['./contribution-margin-cal.component.scss']
})
export class ContributionMarginCalComponent implements OnInit {

  @Input() formulaDefination: FormulaDefination;

  constructor() { }

  ngOnInit() {
  }

}
