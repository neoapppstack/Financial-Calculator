import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BalloonLoanPaymentCalComponent } from './balloon-loan-payment-cal.component';

describe('BalloonLoanPaymentCalComponent', () => {
  let component: BalloonLoanPaymentCalComponent;
  let fixture: ComponentFixture<BalloonLoanPaymentCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BalloonLoanPaymentCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BalloonLoanPaymentCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
