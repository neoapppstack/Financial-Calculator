import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolveForNumberOfPeriodsPvAndFvCalComponent } from './solve-for-number-of-periods-pv-and-fv-cal.component';

describe('SolveForNumberOfPeriodsPvAndFvCalComponent', () => {
  let component: SolveForNumberOfPeriodsPvAndFvCalComponent;
  let fixture: ComponentFixture<SolveForNumberOfPeriodsPvAndFvCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolveForNumberOfPeriodsPvAndFvCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolveForNumberOfPeriodsPvAndFvCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
