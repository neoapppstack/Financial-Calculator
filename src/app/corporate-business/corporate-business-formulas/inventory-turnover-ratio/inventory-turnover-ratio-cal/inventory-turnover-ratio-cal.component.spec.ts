import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryTurnoverRatioCalComponent } from './inventory-turnover-ratio-cal.component';

describe('InventoryTurnoverRatioCalComponent', () => {
  let component: InventoryTurnoverRatioCalComponent;
  let fixture: ComponentFixture<InventoryTurnoverRatioCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryTurnoverRatioCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryTurnoverRatioCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
