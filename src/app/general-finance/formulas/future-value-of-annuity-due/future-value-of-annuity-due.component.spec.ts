import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureValueOfAnnuityDueComponent } from './future-value-of-annuity-due.component';

describe('FutureValueOfAnnuityDueComponent', () => {
  let component: FutureValueOfAnnuityDueComponent;
  let fixture: ComponentFixture<FutureValueOfAnnuityDueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FutureValueOfAnnuityDueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FutureValueOfAnnuityDueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
