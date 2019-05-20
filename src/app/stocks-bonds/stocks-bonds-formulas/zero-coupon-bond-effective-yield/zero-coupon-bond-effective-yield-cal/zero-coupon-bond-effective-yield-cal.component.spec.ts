import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZeroCouponBondEffectiveYieldCalComponent } from './zero-coupon-bond-effective-yield-cal.component';

describe('ZeroCouponBondEffectiveYieldCalComponent', () => {
  let component: ZeroCouponBondEffectiveYieldCalComponent;
  let fixture: ComponentFixture<ZeroCouponBondEffectiveYieldCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZeroCouponBondEffectiveYieldCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZeroCouponBondEffectiveYieldCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
