import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentValueAnnuityFactorCalComponent } from './present-value-annuity-factor-cal.component';

describe('PresentValueAnnuityFactorCalComponent', () => {
  let component: PresentValueAnnuityFactorCalComponent;
  let fixture: ComponentFixture<PresentValueAnnuityFactorCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentValueAnnuityFactorCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentValueAnnuityFactorCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
