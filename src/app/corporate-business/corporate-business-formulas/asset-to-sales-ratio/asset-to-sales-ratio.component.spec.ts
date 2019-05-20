import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetToSalesRatioComponent } from './asset-to-sales-ratio.component';

describe('AssetToSalesRatioComponent', () => {
  let component: AssetToSalesRatioComponent;
  let fixture: ComponentFixture<AssetToSalesRatioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetToSalesRatioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetToSalesRatioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
