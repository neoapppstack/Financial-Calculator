import { FormulaDefinition } from './../../../../_models/formula/formula-definition';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-net-asset-value-cal',
  templateUrl: './net-asset-value-cal.component.html',
  styleUrls: ['./net-asset-value-cal.component.scss']
})
export class NetAssetValueCalComponent implements OnInit {

  @Input() formulaDefinition: FormulaDefinition;

  constructor() { }

  ngOnInit() {
  }

}
