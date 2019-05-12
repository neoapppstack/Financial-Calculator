import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoOfPeriodsOfAnnuityFromFVComponent } from './no-of-periods-of-annuity-from-fv.component';

describe('NoOfPeriodsOfAnnuityFromFVComponent', () => {
  let component: NoOfPeriodsOfAnnuityFromFVComponent;
  let fixture: ComponentFixture<NoOfPeriodsOfAnnuityFromFVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoOfPeriodsOfAnnuityFromFVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoOfPeriodsOfAnnuityFromFVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
