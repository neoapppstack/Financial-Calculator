import { FormulaDefinition } from './../../../../_models/formula/formula-definition';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-deometric-mean-return-cal',
  templateUrl: './deometric-mean-return-cal.component.html',
  styleUrls: ['./deometric-mean-return-cal.component.scss']
})
export class DeometricMeanReturnCalComponent implements OnInit {

  @Input() formulaDefinition: FormulaDefinition;

  constructor() { }

  ngOnInit() {
  }

}
