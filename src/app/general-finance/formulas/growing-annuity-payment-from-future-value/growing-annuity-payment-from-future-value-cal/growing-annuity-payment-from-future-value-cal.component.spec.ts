import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrowingAnnuityPaymentFromFutureValueCalComponent } from './growing-annuity-payment-from-future-value-cal.component';

describe('GrowingAnnuityPaymentFromFutureValueCalComponent', () => {
  let component: GrowingAnnuityPaymentFromFutureValueCalComponent;
  let fixture: ComponentFixture<GrowingAnnuityPaymentFromFutureValueCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrowingAnnuityPaymentFromFutureValueCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrowingAnnuityPaymentFromFutureValueCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
