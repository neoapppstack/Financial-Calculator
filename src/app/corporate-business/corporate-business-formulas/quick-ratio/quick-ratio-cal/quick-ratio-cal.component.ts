import { FormulaDefination } from './../../../../_models/formula/formula-defination';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quick-ratio-cal',
  templateUrl: './quick-ratio-cal.component.html',
  styleUrls: ['./quick-ratio-cal.component.scss']
})
export class QuickRatioCalComponent implements OnInit {

  @Input() formulaDefination: FormulaDefination;

  constructor() { }

  ngOnInit() {
  }

}
