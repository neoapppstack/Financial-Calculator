import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentValueOfAnnuityCalComponent } from './present-value-of-annuity-cal.component';

describe('PresentValueOfAnnuityCalComponent', () => {
  let component: PresentValueOfAnnuityCalComponent;
  let fixture: ComponentFixture<PresentValueOfAnnuityCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentValueOfAnnuityCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentValueOfAnnuityCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
