import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { FormulaData } from './../../_models/formula/formula-data';

@Component({
  selector: 'app-formula-card',
  templateUrl: './formula-card.component.html',
  styleUrls: ['./formula-card.component.scss']
})
export class FormulaCardComponent implements OnInit {

  constructor(private router: Router) { }

@Input() formulaData: FormulaData;

ngOnInit() {
}

navigateTo (url: String) {
  this.router.navigate([url]);
}

}
