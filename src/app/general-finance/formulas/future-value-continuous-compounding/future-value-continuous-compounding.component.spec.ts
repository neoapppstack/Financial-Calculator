import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureValueContinuousCompoundingComponent } from './future-value-continuous-compounding.component';

describe('FutureValueContinuousCompoundingComponent', () => {
  let component: FutureValueContinuousCompoundingComponent;
  let fixture: ComponentFixture<FutureValueContinuousCompoundingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FutureValueContinuousCompoundingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FutureValueContinuousCompoundingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
