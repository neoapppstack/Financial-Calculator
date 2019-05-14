import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnuityPaymentFromFutureValueComponent } from './annuity-payment-from-future-value.component';

describe('AnnuityPaymentFromFutureValueComponent', () => {
  let component: AnnuityPaymentFromFutureValueComponent;
  let fixture: ComponentFixture<AnnuityPaymentFromFutureValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnuityPaymentFromFutureValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnuityPaymentFromFutureValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
