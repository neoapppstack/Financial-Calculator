import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BalloonLoanPaymentComponent } from './balloon-loan-payment.component';

describe('BalloonLoanPaymentComponent', () => {
  let component: BalloonLoanPaymentComponent;
  let fixture: ComponentFixture<BalloonLoanPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BalloonLoanPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BalloonLoanPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
