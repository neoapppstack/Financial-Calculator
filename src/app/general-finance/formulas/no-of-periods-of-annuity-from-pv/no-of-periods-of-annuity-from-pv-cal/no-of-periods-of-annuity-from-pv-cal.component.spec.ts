import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoOfPeriodsOfAnnuityFromPvCalComponent } from './no-of-periods-of-annuity-from-pv-cal.component';

describe('NoOfPeriodsOfAnnuityFromPvCalComponent', () => {
  let component: NoOfPeriodsOfAnnuityFromPvCalComponent;
  let fixture: ComponentFixture<NoOfPeriodsOfAnnuityFromPvCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoOfPeriodsOfAnnuityFromPvCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoOfPeriodsOfAnnuityFromPvCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
