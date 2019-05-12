import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoOfPeriodsOfAnnuityFromFvCalComponent } from './no-of-periods-of-annuity-from-fv-cal.component';

describe('NoOfPeriodsOfAnnuityFromFvCalComponent', () => {
  let component: NoOfPeriodsOfAnnuityFromFvCalComponent;
  let fixture: ComponentFixture<NoOfPeriodsOfAnnuityFromFvCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoOfPeriodsOfAnnuityFromFvCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoOfPeriodsOfAnnuityFromFvCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
