import { FormulaDefinition } from '../../_models/formula/formula-definition';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-formula-definition',
  templateUrl: './formula-definition.component.html',
  styleUrls: ['./formula-definition.component.scss']
})
export class FormulaDefinitionComponent implements OnInit {

  @Input() formulaDefinition: FormulaDefinition;

  constructor() { }

  ngOnInit() {
  }

}
