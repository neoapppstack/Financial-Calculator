import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebtToIncomeRatioComponent } from './debt-to-income-ratio.component';

describe('DebtToIncomeRatioComponent', () => {
  let component: DebtToIncomeRatioComponent;
  let fixture: ComponentFixture<DebtToIncomeRatioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebtToIncomeRatioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebtToIncomeRatioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
