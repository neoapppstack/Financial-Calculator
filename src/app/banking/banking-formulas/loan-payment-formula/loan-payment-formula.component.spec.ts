import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanPaymentFormulaComponent } from './loan-payment-formula.component';

describe('LoanPaymentFormulaComponent', () => {
  let component: LoanPaymentFormulaComponent;
  let fixture: ComponentFixture<LoanPaymentFormulaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanPaymentFormulaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanPaymentFormulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
