import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapitalAssetPricingModelComponent } from './capital-asset-pricing-model.component';

describe('CapitalAssetPricingModelComponent', () => {
  let component: CapitalAssetPricingModelComponent;
  let fixture: ComponentFixture<CapitalAssetPricingModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapitalAssetPricingModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapitalAssetPricingModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
