import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DividendPayoutRatioComponent } from './dividend-payout-ratio.component';

describe('DividendPayoutRatioComponent', () => {
  let component: DividendPayoutRatioComponent;
  let fixture: ComponentFixture<DividendPayoutRatioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DividendPayoutRatioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DividendPayoutRatioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
