import { FormulaDefination } from './../../../../_models/formula/formula-defination';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-current-yield-cal',
  templateUrl: './current-yield-cal.component.html',
  styleUrls: ['./current-yield-cal.component.scss']
})
export class CurrentYieldCalComponent implements OnInit {

  @Input() formulaDefination: FormulaDefination;

  constructor() { }

  ngOnInit() {
  }

}
