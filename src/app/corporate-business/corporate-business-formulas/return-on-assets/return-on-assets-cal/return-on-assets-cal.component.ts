import { FormulaDefination } from './../../../../_models/formula/formula-defination';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-return-on-assets-cal',
  templateUrl: './return-on-assets-cal.component.html',
  styleUrls: ['./return-on-assets-cal.component.scss']
})
export class ReturnOnAssetsCalComponent implements OnInit {

  @Input() formulaDefination: FormulaDefination;

  constructor() { }

  ngOnInit() {
  }

}
