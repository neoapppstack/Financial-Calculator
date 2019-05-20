import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskPremiumComponent } from './risk-premium.component';

describe('RiskPremiumComponent', () => {
  let component: RiskPremiumComponent;
  let fixture: ComponentFixture<RiskPremiumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiskPremiumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskPremiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
