import { FormulaDefinition } from './../../../../_models/formula/formula-definition';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-diluted-eps-cal',
  templateUrl: './diluted-eps-cal.component.html',
  styleUrls: ['./diluted-eps-cal.component.scss']
})
export class DilutedEpsCalComponent implements OnInit {

  @Input() formulaDefinition: FormulaDefinition;

  constructor() { }

  ngOnInit() {
  }

}
