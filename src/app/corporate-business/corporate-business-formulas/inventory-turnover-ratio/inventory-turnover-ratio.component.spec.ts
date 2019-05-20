import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryTurnoverRatioComponent } from './inventory-turnover-ratio.component';

describe('InventoryTurnoverRatioComponent', () => {
  let component: InventoryTurnoverRatioComponent;
  let fixture: ComponentFixture<InventoryTurnoverRatioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InventoryTurnoverRatioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InventoryTurnoverRatioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
