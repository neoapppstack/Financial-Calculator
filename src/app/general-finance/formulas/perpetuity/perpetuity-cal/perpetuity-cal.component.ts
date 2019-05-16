import { FormulaDefination } from './../../../../_models/formula/formula-defination';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-perpetuity-cal',
  templateUrl: './perpetuity-cal.component.html',
  styleUrls: ['./perpetuity-cal.component.scss']
})
export class PerpetuityCalComponent implements OnInit {

  @Input() formulaDefination: FormulaDefination;

  constructor() { }

  ngOnInit() {
  }

}
