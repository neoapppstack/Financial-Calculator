import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentValueContinuousCompoundingComponent } from './present-value-continuous-compounding.component';

describe('PresentValueContinuousCompoundingComponent', () => {
  let component: PresentValueContinuousCompoundingComponent;
  let fixture: ComponentFixture<PresentValueContinuousCompoundingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentValueContinuousCompoundingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentValueContinuousCompoundingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
