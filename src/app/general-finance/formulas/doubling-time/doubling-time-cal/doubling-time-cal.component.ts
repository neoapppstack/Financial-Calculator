import { FormulaDefination } from './../../../../_models/formula/formula-defination';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-doubling-time-cal',
  templateUrl: './doubling-time-cal.component.html',
  styleUrls: ['./doubling-time-cal.component.scss']
})
export class DoublingTimeCalComponent implements OnInit {

  @Input() formulaDefination: FormulaDefination;

  constructor() { }

  ngOnInit() {
  }

}
