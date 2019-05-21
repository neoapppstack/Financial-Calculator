import { FormulaDefination } from './../../../../_models/formula/formula-defination';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-estimated-earnings-cal',
  templateUrl: './estimated-earnings-cal.component.html',
  styleUrls: ['./estimated-earnings-cal.component.scss']
})
export class EstimatedEarningsCalComponent implements OnInit {

  @Input() formulaDefination: FormulaDefination;

  constructor() { }

  ngOnInit() {
  }

}
