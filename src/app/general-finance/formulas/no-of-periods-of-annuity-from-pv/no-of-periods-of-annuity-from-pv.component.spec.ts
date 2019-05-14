import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoOfPeriodsOfAnnuityFromPvComponent } from './no-of-periods-of-annuity-from-pv.component';

describe('NoOfPeriodsOfAnnuityFromPvComponent', () => {
  let component: NoOfPeriodsOfAnnuityFromPvComponent;
  let fixture: ComponentFixture<NoOfPeriodsOfAnnuityFromPvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoOfPeriodsOfAnnuityFromPvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoOfPeriodsOfAnnuityFromPvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
