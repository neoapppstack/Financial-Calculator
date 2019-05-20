import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PvOfStockWithZeroGrowthCalComponent } from './pv-of-stock-with-zero-growth-cal.component';

describe('PvOfStockWithZeroGrowthCalComponent', () => {
  let component: PvOfStockWithZeroGrowthCalComponent;
  let fixture: ComponentFixture<PvOfStockWithZeroGrowthCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PvOfStockWithZeroGrowthCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PvOfStockWithZeroGrowthCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
