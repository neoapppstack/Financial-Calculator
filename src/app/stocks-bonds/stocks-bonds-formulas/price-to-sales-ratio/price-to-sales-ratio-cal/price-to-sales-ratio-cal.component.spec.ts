import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceToSalesRatioCalComponent } from './price-to-sales-ratio-cal.component';

describe('PriceToSalesRatioCalComponent', () => {
  let component: PriceToSalesRatioCalComponent;
  let fixture: ComponentFixture<PriceToSalesRatioCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceToSalesRatioCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceToSalesRatioCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
