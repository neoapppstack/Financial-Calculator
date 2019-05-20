import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanToValueRatioCalComponent } from './loan-to-value-ratio-cal.component';

describe('LoanToValueRatioCalComponent', () => {
  let component: LoanToValueRatioCalComponent;
  let fixture: ComponentFixture<LoanToValueRatioCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanToValueRatioCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanToValueRatioCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
