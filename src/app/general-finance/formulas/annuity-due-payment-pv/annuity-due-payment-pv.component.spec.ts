import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnuityDuePaymentPvComponent } from './annuity-due-payment-pv.component';

describe('AnnuityDuePaymentPvComponent', () => {
  let component: AnnuityDuePaymentPvComponent;
  let fixture: ComponentFixture<AnnuityDuePaymentPvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnuityDuePaymentPvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnuityDuePaymentPvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
