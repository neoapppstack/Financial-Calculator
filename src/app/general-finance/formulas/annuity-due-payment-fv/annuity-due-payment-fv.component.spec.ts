import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnuityDuePaymentFvComponent } from './annuity-due-payment-fv.component';

describe('AnnuityDuePaymentFvComponent', () => {
  let component: AnnuityDuePaymentFvComponent;
  let fixture: ComponentFixture<AnnuityDuePaymentFvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnuityDuePaymentFvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnuityDuePaymentFvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
