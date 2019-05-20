import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZeroCouponBondValueCalComponent } from './zero-coupon-bond-value-cal.component';

describe('ZeroCouponBondValueCalComponent', () => {
  let component: ZeroCouponBondValueCalComponent;
  let fixture: ComponentFixture<ZeroCouponBondValueCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZeroCouponBondValueCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZeroCouponBondValueCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
