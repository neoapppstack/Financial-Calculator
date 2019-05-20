import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquivalentAnnualAnnuityCalComponent } from './equivalent-annual-annuity-cal.component';

describe('EquivalentAnnualAnnuityCalComponent', () => {
  let component: EquivalentAnnualAnnuityCalComponent;
  let fixture: ComponentFixture<EquivalentAnnualAnnuityCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquivalentAnnualAnnuityCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquivalentAnnualAnnuityCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
