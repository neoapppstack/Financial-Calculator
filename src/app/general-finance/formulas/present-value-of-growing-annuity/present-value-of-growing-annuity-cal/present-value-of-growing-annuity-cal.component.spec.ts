import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentValueOfGrowingAnnuityCalComponent } from './present-value-of-growing-annuity-cal.component';

describe('PresentValueOfGrowingAnnuityCalComponent', () => {
  let component: PresentValueOfGrowingAnnuityCalComponent;
  let fixture: ComponentFixture<PresentValueOfGrowingAnnuityCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentValueOfGrowingAnnuityCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentValueOfGrowingAnnuityCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
