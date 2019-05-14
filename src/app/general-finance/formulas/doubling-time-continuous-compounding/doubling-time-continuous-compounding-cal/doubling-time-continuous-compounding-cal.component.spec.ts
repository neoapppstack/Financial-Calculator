import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoublingTimeContinuousCompoundingCalComponent } from './doubling-time-continuous-compounding-cal.component';

describe('DoublingTimeContinuousCompoundingCalComponent', () => {
  let component: DoublingTimeContinuousCompoundingCalComponent;
  let fixture: ComponentFixture<DoublingTimeContinuousCompoundingCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoublingTimeContinuousCompoundingCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoublingTimeContinuousCompoundingCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
