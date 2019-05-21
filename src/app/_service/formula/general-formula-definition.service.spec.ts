import { TestBed } from '@angular/core/testing';

import { GeneralFormulaDefinitionService } from './general-formula-definition.service';

describe('GeneralFormulaDefinitionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GeneralFormulaDefinitionService = TestBed.get(GeneralFormulaDefinitionService);
    expect(service).toBeTruthy();
  });
});
