import { FormulaDefination } from './../../../../_models/formula/formula-defination';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-compound-interest-cal',
  templateUrl: './compound-interest-cal.component.html',
  styleUrls: ['./compound-interest-cal.component.scss']
})
export class CompoundInterestCalComponent implements OnInit {

  @Input() formulaDefination: FormulaDefination;

  constructor() { }

  ngOnInit() {
  }

}
