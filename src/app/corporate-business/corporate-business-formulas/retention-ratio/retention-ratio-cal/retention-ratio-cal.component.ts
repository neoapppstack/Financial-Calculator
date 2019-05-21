import { FormulaDefination } from './../../../../_models/formula/formula-defination';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-retention-ratio-cal',
  templateUrl: './retention-ratio-cal.component.html',
  styleUrls: ['./retention-ratio-cal.component.scss']
})
export class RetentionRatioCalComponent implements OnInit {

  @Input() formulaDefination: FormulaDefination;

  constructor() { }

  ngOnInit() {
  }

}
