import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PvOfStockWithConstantGrowthCalComponent } from './pv-of-stock-with-constant-growth-cal.component';

describe('PvOfStockWithConstantGrowthCalComponent', () => {
  let component: PvOfStockWithConstantGrowthCalComponent;
  let fixture: ComponentFixture<PvOfStockWithConstantGrowthCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PvOfStockWithConstantGrowthCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PvOfStockWithConstantGrowthCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
