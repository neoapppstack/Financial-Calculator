import { FormulaDefinition } from './../../../../_models/formula/formula-definition';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-return-on-assets-cal',
  templateUrl: './return-on-assets-cal.component.html',
  styleUrls: ['./return-on-assets-cal.component.scss']
})
export class ReturnOnAssetsCalComponent implements OnInit {

  @Input() formulaDefinition: FormulaDefinition;

  constructor() { }

  ngOnInit() {
  }

}
