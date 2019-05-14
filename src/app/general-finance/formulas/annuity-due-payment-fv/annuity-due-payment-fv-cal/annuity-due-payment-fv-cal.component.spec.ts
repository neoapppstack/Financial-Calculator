import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnuityDuePaymentFvCalComponent } from './annuity-due-payment-fv-cal.component';

describe('AnnuityDuePaymentFvCalComponent', () => {
  let component: AnnuityDuePaymentFvCalComponent;
  let fixture: ComponentFixture<AnnuityDuePaymentFvCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnuityDuePaymentFvCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnuityDuePaymentFvCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
