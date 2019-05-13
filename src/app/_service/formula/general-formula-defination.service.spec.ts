import { TestBed } from '@angular/core/testing';

import { GeneralFormulaDefinationService } from './general-formula-defination.service';

describe('GeneralFormulaDefinationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GeneralFormulaDefinationService = TestBed.get(GeneralFormulaDefinationService);
    expect(service).toBeTruthy();
  });
});
