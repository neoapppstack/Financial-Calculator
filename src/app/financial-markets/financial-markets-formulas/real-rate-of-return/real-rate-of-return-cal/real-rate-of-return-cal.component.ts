import { FormulaDefinition } from './../../../../_models/formula/formula-definition';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-real-rate-of-return-cal',
  templateUrl: './real-rate-of-return-cal.component.html',
  styleUrls: ['./real-rate-of-return-cal.component.scss']
})
export class RealRateOfReturnCalComponent implements OnInit {

  @Input() formulaDefinition: FormulaDefinition;

  constructor() { }

  ngOnInit() {
  }

}
