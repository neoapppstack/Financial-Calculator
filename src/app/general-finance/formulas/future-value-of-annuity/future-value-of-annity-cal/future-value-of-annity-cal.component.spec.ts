import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureValueOfAnnityCalComponent } from './future-value-of-annity-cal.component';

describe('FutureValueOfAnnityCalComponent', () => {
  let component: FutureValueOfAnnityCalComponent;
  let fixture: ComponentFixture<FutureValueOfAnnityCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FutureValueOfAnnityCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FutureValueOfAnnityCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
