import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanToDepositRatioComponent } from './loan-to-deposit-ratio.component';

describe('LoanToDepositRatioComponent', () => {
  let component: LoanToDepositRatioComponent;
  let fixture: ComponentFixture<LoanToDepositRatioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanToDepositRatioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanToDepositRatioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
