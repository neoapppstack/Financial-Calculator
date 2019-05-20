import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebtCoverageRatioComponent } from './debt-coverage-ratio.component';

describe('DebtCoverageRatioComponent', () => {
  let component: DebtCoverageRatioComponent;
  let fixture: ComponentFixture<DebtCoverageRatioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebtCoverageRatioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebtCoverageRatioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
