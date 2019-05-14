import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureValueOfAnnuityDueCalComponent } from './future-value-of-annuity-due-cal.component';

describe('FutureValueOfAnnuityDueCalComponent', () => {
  let component: FutureValueOfAnnuityDueCalComponent;
  let fixture: ComponentFixture<FutureValueOfAnnuityDueCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FutureValueOfAnnuityDueCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FutureValueOfAnnuityDueCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
