import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureValueOfGrowingAnnuityComponent } from './future-value-of-growing-annuity.component';

describe('FutureValueOfGrowingAnnuityComponent', () => {
  let component: FutureValueOfGrowingAnnuityComponent;
  let fixture: ComponentFixture<FutureValueOfGrowingAnnuityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FutureValueOfGrowingAnnuityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FutureValueOfGrowingAnnuityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
