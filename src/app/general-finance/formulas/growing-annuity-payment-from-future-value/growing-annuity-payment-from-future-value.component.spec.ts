import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrowingAnnuityPaymentFromFutureValueComponent } from './growing-annuity-payment-from-future-value.component';

describe('GrowingAnnuityPaymentFromFutureValueComponent', () => {
  let component: GrowingAnnuityPaymentFromFutureValueComponent;
  let fixture: ComponentFixture<GrowingAnnuityPaymentFromFutureValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrowingAnnuityPaymentFromFutureValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrowingAnnuityPaymentFromFutureValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
