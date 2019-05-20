import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZeroCouponBondValueComponent } from './zero-coupon-bond-value.component';

describe('ZeroCouponBondValueComponent', () => {
  let component: ZeroCouponBondValueComponent;
  let fixture: ComponentFixture<ZeroCouponBondValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZeroCouponBondValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZeroCouponBondValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
