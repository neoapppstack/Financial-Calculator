import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoublingTimeContinuousCompoundingComponent } from './doubling-time-continuous-compounding.component';

describe('DoublingTimeContinuousCompoundingComponent', () => {
  let component: DoublingTimeContinuousCompoundingComponent;
  let fixture: ComponentFixture<DoublingTimeContinuousCompoundingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoublingTimeContinuousCompoundingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoublingTimeContinuousCompoundingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
