import { FormulaDefinition } from './../../../../_models/formula/formula-definition';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quick-ratio-cal',
  templateUrl: './quick-ratio-cal.component.html',
  styleUrls: ['./quick-ratio-cal.component.scss']
})
export class QuickRatioCalComponent implements OnInit {

  @Input() formulaDefinition: FormulaDefinition;

  constructor() { }

  ngOnInit() {
  }

}
