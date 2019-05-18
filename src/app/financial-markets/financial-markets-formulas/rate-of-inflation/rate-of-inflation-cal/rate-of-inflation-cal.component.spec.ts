import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RateOfInflationCalComponent } from './rate-of-inflation-cal.component';

describe('RateOfInflationCalComponent', () => {
  let component: RateOfInflationCalComponent;
  let fixture: ComponentFixture<RateOfInflationCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RateOfInflationCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RateOfInflationCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
