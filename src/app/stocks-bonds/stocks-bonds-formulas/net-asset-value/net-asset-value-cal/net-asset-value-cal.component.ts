import { FormulaDefination } from './../../../../_models/formula/formula-defination';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-net-asset-value-cal',
  templateUrl: './net-asset-value-cal.component.html',
  styleUrls: ['./net-asset-value-cal.component.scss']
})
export class NetAssetValueCalComponent implements OnInit {

  @Input() formulaDefination: FormulaDefination;

  constructor() { }

  ngOnInit() {
  }

}
