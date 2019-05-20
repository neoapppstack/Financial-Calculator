import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountedPaybackPeriodComponent } from './discounted-payback-period.component';

describe('DiscountedPaybackPeriodComponent', () => {
  let component: DiscountedPaybackPeriodComponent;
  let fixture: ComponentFixture<DiscountedPaybackPeriodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscountedPaybackPeriodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscountedPaybackPeriodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
