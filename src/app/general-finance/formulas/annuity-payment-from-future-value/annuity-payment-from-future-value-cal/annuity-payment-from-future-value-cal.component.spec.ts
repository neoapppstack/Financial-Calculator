import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnuityPaymentFromFutureValueCalComponent } from './annuity-payment-from-future-value-cal.component';

describe('AnnuityPaymentFromFutureValueCalComponent', () => {
  let component: AnnuityPaymentFromFutureValueCalComponent;
  let fixture: ComponentFixture<AnnuityPaymentFromFutureValueCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnuityPaymentFromFutureValueCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnuityPaymentFromFutureValueCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
