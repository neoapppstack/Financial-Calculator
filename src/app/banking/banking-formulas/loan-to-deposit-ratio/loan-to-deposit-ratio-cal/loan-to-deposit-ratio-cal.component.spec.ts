import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanToDepositRatioCalComponent } from './loan-to-deposit-ratio-cal.component';

describe('LoanToDepositRatioCalComponent', () => {
  let component: LoanToDepositRatioCalComponent;
  let fixture: ComponentFixture<LoanToDepositRatioCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanToDepositRatioCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanToDepositRatioCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
