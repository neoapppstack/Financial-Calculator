import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentValueAnnuityFactorComponent } from './present-value-annuity-factor.component';

describe('PresentValueAnnuityFactorComponent', () => {
  let component: PresentValueAnnuityFactorComponent;
  let fixture: ComponentFixture<PresentValueAnnuityFactorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentValueAnnuityFactorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentValueAnnuityFactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
