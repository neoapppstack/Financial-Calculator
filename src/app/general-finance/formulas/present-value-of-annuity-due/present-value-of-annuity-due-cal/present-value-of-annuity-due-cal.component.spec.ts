import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentValueOfAnnuityDueCalComponent } from './present-value-of-annuity-due-cal.component';

describe('PresentValueOfAnnuityDueCalComponent', () => {
  let component: PresentValueOfAnnuityDueCalComponent;
  let fixture: ComponentFixture<PresentValueOfAnnuityDueCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentValueOfAnnuityDueCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentValueOfAnnuityDueCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
