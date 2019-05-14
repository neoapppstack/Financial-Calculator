import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnuityDuePaymentPvCalComponent } from './annuity-due-payment-pv-cal.component';

describe('AnnuityDuePaymentPvCalComponent', () => {
  let component: AnnuityDuePaymentPvCalComponent;
  let fixture: ComponentFixture<AnnuityDuePaymentPvCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnuityDuePaymentPvCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnuityDuePaymentPvCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
