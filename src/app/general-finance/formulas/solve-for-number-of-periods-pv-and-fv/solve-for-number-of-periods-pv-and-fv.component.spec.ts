import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolveForNumberOfPeriodsPvAndFvComponent } from './solve-for-number-of-periods-pv-and-fv.component';

describe('SolveForNumberOfPeriodsPvAndFvComponent', () => {
  let component: SolveForNumberOfPeriodsPvAndFvComponent;
  let fixture: ComponentFixture<SolveForNumberOfPeriodsPvAndFvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolveForNumberOfPeriodsPvAndFvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolveForNumberOfPeriodsPvAndFvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
