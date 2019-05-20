import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceToSalesRatioComponent } from './price-to-sales-ratio.component';

describe('PriceToSalesRatioComponent', () => {
  let component: PriceToSalesRatioComponent;
  let fixture: ComponentFixture<PriceToSalesRatioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceToSalesRatioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceToSalesRatioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
