import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebtCoverageRatioCalComponent } from './debt-coverage-ratio-cal.component';

describe('DebtCoverageRatioCalComponent', () => {
  let component: DebtCoverageRatioCalComponent;
  let fixture: ComponentFixture<DebtCoverageRatioCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebtCoverageRatioCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebtCoverageRatioCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
