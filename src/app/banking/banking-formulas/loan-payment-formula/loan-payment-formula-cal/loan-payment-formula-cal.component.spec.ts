import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanPaymentFormulaCalComponent } from './loan-payment-formula-cal.component';

describe('LoanPaymentFormulaCalComponent', () => {
  let component: LoanPaymentFormulaCalComponent;
  let fixture: ComponentFixture<LoanPaymentFormulaCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanPaymentFormulaCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanPaymentFormulaCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
