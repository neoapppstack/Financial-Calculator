import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebtToEquityRatioCalComponent } from './debt-to-equity-ratio-cal.component';

describe('DebtToEquityRatioCalComponent', () => {
  let component: DebtToEquityRatioCalComponent;
  let fixture: ComponentFixture<DebtToEquityRatioCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebtToEquityRatioCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebtToEquityRatioCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
