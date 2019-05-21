import { FormulaDefination } from './../../../../_models/formula/formula-defination';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-simple-interest-cal',
  templateUrl: './simple-interest-cal.component.html',
  styleUrls: ['./simple-interest-cal.component.scss']
})
export class SimpleInterestCalComponent implements OnInit {

  @Input() formulaDefination: FormulaDefination;

  constructor() { }

  ngOnInit() {
  }

}
