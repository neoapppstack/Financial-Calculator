import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrowingAnnuityPaymentComponent } from './growing-annuity-payment.component';

describe('GrowingAnnuityPaymentComponent', () => {
  let component: GrowingAnnuityPaymentComponent;
  let fixture: ComponentFixture<GrowingAnnuityPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrowingAnnuityPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrowingAnnuityPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
