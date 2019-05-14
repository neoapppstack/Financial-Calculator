import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnuityPaymentFormulaCalComponent } from './annuity-payment-formula-cal.component';

describe('AnnuityPaymentFormulaCalComponent', () => {
  let component: AnnuityPaymentFormulaCalComponent;
  let fixture: ComponentFixture<AnnuityPaymentFormulaCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnuityPaymentFormulaCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnuityPaymentFormulaCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
