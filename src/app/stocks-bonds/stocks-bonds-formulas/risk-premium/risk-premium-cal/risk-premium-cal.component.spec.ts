import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiskPremiumCalComponent } from './risk-premium-cal.component';

describe('RiskPremiumCalComponent', () => {
  let component: RiskPremiumCalComponent;
  let fixture: ComponentFixture<RiskPremiumCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiskPremiumCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiskPremiumCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
