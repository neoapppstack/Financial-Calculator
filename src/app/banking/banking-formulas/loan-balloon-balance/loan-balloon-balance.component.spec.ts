import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanBalloonBalanceComponent } from './loan-balloon-balance.component';

describe('LoanBalloonBalanceComponent', () => {
  let component: LoanBalloonBalanceComponent;
  let fixture: ComponentFixture<LoanBalloonBalanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanBalloonBalanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanBalloonBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
