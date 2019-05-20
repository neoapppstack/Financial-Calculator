import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetToSalesRatioCalComponent } from './asset-to-sales-ratio-cal.component';

describe('AssetToSalesRatioCalComponent', () => {
  let component: AssetToSalesRatioCalComponent;
  let fixture: ComponentFixture<AssetToSalesRatioCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetToSalesRatioCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetToSalesRatioCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
