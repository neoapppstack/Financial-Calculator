import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountedPaybackPeriodCalComponent } from './discounted-payback-period-cal.component';

describe('DiscountedPaybackPeriodCalComponent', () => {
  let component: DiscountedPaybackPeriodCalComponent;
  let fixture: ComponentFixture<DiscountedPaybackPeriodCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscountedPaybackPeriodCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscountedPaybackPeriodCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
