import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PvOfStockWithConstantGrowthComponent } from './pv-of-stock-with-constant-growth.component';

describe('PvOfStockWithConstantGrowthComponent', () => {
  let component: PvOfStockWithConstantGrowthComponent;
  let fixture: ComponentFixture<PvOfStockWithConstantGrowthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PvOfStockWithConstantGrowthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PvOfStockWithConstantGrowthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
