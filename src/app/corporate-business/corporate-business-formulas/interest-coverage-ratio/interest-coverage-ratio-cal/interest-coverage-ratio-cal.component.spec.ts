import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestCoverageRatioCalComponent } from './interest-coverage-ratio-cal.component';

describe('InterestCoverageRatioCalComponent', () => {
  let component: InterestCoverageRatioCalComponent;
  let fixture: ComponentFixture<InterestCoverageRatioCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterestCoverageRatioCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestCoverageRatioCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
