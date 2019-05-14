import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureValueOfGrowingAnnuityCalComponent } from './future-value-of-growing-annuity-cal.component';

describe('FutureValueOfGrowingAnnuityCalComponent', () => {
  let component: FutureValueOfGrowingAnnuityCalComponent;
  let fixture: ComponentFixture<FutureValueOfGrowingAnnuityCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FutureValueOfGrowingAnnuityCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FutureValueOfGrowingAnnuityCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
