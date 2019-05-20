import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceEarningsRatioCalComponent } from './price-earnings-ratio-cal.component';

describe('PriceEarningsRatioCalComponent', () => {
  let component: PriceEarningsRatioCalComponent;
  let fixture: ComponentFixture<PriceEarningsRatioCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceEarningsRatioCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceEarningsRatioCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
