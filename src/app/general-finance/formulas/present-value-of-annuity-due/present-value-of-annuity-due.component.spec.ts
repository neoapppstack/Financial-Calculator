import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentValueOfAnnuityDueComponent } from './present-value-of-annuity-due.component';

describe('PresentValueOfAnnuityDueComponent', () => {
  let component: PresentValueOfAnnuityDueComponent;
  let fixture: ComponentFixture<PresentValueOfAnnuityDueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentValueOfAnnuityDueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentValueOfAnnuityDueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
