import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebtToEquityRatioComponent } from './debt-to-equity-ratio.component';

describe('DebtToEquityRatioComponent', () => {
  let component: DebtToEquityRatioComponent;
  let fixture: ComponentFixture<DebtToEquityRatioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebtToEquityRatioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebtToEquityRatioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
