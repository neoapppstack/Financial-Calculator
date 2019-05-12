import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureValueOfAnnuityContinuousCompoundingCalComponent } from './future-value-of-annuity-continuous-compounding-cal.component';

describe('FutureValueOfAnnuityContinuousCompoundingCalComponent', () => {
  let component: FutureValueOfAnnuityContinuousCompoundingCalComponent;
  let fixture: ComponentFixture<FutureValueOfAnnuityContinuousCompoundingCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FutureValueOfAnnuityContinuousCompoundingCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FutureValueOfAnnuityContinuousCompoundingCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
