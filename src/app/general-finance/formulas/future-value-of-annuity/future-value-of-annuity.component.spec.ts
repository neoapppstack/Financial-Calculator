import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureValueOfAnnuityComponent } from './future-value-of-annuity.component';

describe('FutureValueOfAnnuityComponent', () => {
  let component: FutureValueOfAnnuityComponent;
  let fixture: ComponentFixture<FutureValueOfAnnuityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FutureValueOfAnnuityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FutureValueOfAnnuityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
