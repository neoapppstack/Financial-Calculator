import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureValueOfAnnuityContinuousCompoundingComponent } from './future-value-of-annuity-continuous-compounding.component';

describe('FutureValueOfAnnuityContinuousCompoundingComponent', () => {
  let component: FutureValueOfAnnuityContinuousCompoundingComponent;
  let fixture: ComponentFixture<FutureValueOfAnnuityContinuousCompoundingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FutureValueOfAnnuityContinuousCompoundingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FutureValueOfAnnuityContinuousCompoundingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
