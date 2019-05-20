import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanBalloonBalanceCalComponent } from './loan-balloon-balance-cal.component';

describe('LoanBalloonBalanceCalComponent', () => {
  let component: LoanBalloonBalanceCalComponent;
  let fixture: ComponentFixture<LoanBalloonBalanceCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanBalloonBalanceCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanBalloonBalanceCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
