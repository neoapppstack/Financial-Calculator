import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquivalentAnnualAnnuityComponent } from './equivalent-annual-annuity.component';

describe('EquivalentAnnualAnnuityComponent', () => {
  let component: EquivalentAnnualAnnuityComponent;
  let fixture: ComponentFixture<EquivalentAnnualAnnuityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquivalentAnnualAnnuityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquivalentAnnualAnnuityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
