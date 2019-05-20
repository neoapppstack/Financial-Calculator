import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PvOfStockWithZeroGrowthComponent } from './pv-of-stock-with-zero-growth.component';

describe('PvOfStockWithZeroGrowthComponent', () => {
  let component: PvOfStockWithZeroGrowthComponent;
  let fixture: ComponentFixture<PvOfStockWithZeroGrowthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PvOfStockWithZeroGrowthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PvOfStockWithZeroGrowthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
