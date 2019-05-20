import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestCoverageRatioComponent } from './interest-coverage-ratio.component';

describe('InterestCoverageRatioComponent', () => {
  let component: InterestCoverageRatioComponent;
  let fixture: ComponentFixture<InterestCoverageRatioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterestCoverageRatioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestCoverageRatioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
