import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContributionMarginCalComponent } from './contribution-margin-cal.component';

describe('ContributionMarginCalComponent', () => {
  let component: ContributionMarginCalComponent;
  let fixture: ComponentFixture<ContributionMarginCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContributionMarginCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContributionMarginCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
