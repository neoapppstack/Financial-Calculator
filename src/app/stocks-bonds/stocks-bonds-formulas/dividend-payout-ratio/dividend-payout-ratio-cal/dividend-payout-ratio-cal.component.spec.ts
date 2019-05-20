import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DividendPayoutRatioCalComponent } from './dividend-payout-ratio-cal.component';

describe('DividendPayoutRatioCalComponent', () => {
  let component: DividendPayoutRatioCalComponent;
  let fixture: ComponentFixture<DividendPayoutRatioCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DividendPayoutRatioCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DividendPayoutRatioCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
