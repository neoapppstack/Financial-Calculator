import { FormulaDefination } from './../../../../_models/formula/formula-defination';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-deometric-mean-return-cal',
  templateUrl: './deometric-mean-return-cal.component.html',
  styleUrls: ['./deometric-mean-return-cal.component.scss']
})
export class DeometricMeanReturnCalComponent implements OnInit {

  @Input() formulaDefination: FormulaDefination;

  constructor() { }

  ngOnInit() {
  }

}
