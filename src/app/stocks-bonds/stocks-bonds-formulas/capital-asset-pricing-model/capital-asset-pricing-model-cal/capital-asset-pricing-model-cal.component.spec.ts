import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapitalAssetPricingModelCalComponent } from './capital-asset-pricing-model-cal.component';

describe('CapitalAssetPricingModelCalComponent', () => {
  let component: CapitalAssetPricingModelCalComponent;
  let fixture: ComponentFixture<CapitalAssetPricingModelCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapitalAssetPricingModelCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapitalAssetPricingModelCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
