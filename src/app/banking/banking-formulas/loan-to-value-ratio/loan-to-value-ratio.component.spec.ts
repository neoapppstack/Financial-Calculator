import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanToValueRatioComponent } from './loan-to-value-ratio.component';

describe('LoanToValueRatioComponent', () => {
  let component: LoanToValueRatioComponent;
  let fixture: ComponentFixture<LoanToValueRatioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanToValueRatioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanToValueRatioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
