import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebtToIncomeRatioCalComponent } from './debt-to-income-ratio-cal.component';

describe('DebtToIncomeRatioCalComponent', () => {
  let component: DebtToIncomeRatioCalComponent;
  let fixture: ComponentFixture<DebtToIncomeRatioCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebtToIncomeRatioCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebtToIncomeRatioCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
