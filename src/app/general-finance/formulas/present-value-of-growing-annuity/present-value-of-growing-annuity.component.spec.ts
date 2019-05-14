import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentValueOfGrowingAnnuityComponent } from './present-value-of-growing-annuity.component';

describe('PresentValueOfGrowingAnnuityComponent', () => {
  let component: PresentValueOfGrowingAnnuityComponent;
  let fixture: ComponentFixture<PresentValueOfGrowingAnnuityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentValueOfGrowingAnnuityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentValueOfGrowingAnnuityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
