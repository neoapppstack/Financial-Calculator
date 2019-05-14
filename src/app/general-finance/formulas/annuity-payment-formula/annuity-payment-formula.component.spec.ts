import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnuityPaymentFormulaComponent } from './annuity-payment-formula.component';

describe('AnnuityPaymentFormulaComponent', () => {
  let component: AnnuityPaymentFormulaComponent;
  let fixture: ComponentFixture<AnnuityPaymentFormulaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnuityPaymentFormulaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnuityPaymentFormulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
