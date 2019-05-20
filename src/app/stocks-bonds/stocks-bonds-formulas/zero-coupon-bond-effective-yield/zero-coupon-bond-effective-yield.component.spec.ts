import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZeroCouponBondEffectiveYieldComponent } from './zero-coupon-bond-effective-yield.component';

describe('ZeroCouponBondEffectiveYieldComponent', () => {
  let component: ZeroCouponBondEffectiveYieldComponent;
  let fixture: ComponentFixture<ZeroCouponBondEffectiveYieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZeroCouponBondEffectiveYieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZeroCouponBondEffectiveYieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
