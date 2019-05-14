import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrowingAnnuityPaymentCalComponent } from './growing-annuity-payment-cal.component';

describe('GrowingAnnuityPaymentCalComponent', () => {
  let component: GrowingAnnuityPaymentCalComponent;
  let fixture: ComponentFixture<GrowingAnnuityPaymentCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrowingAnnuityPaymentCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrowingAnnuityPaymentCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
