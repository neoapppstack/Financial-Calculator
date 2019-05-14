import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentValueContinuousCompoundingCalComponent } from './present-value-continuous-compounding-cal.component';

describe('PresentValueContinuousCompoundingCalComponent', () => {
  let component: PresentValueContinuousCompoundingCalComponent;
  let fixture: ComponentFixture<PresentValueContinuousCompoundingCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentValueContinuousCompoundingCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentValueContinuousCompoundingCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
