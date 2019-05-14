import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureValueContinuousCompoundingCalComponent } from './future-value-continuous-compounding-cal.component';

describe('FutureValueContinuousCompoundingCalComponent', () => {
  let component: FutureValueContinuousCompoundingCalComponent;
  let fixture: ComponentFixture<FutureValueContinuousCompoundingCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FutureValueContinuousCompoundingCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FutureValueContinuousCompoundingCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
