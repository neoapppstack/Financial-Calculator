import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeCashFlowToEquityCalComponent } from './free-cash-flow-to-equity-cal.component';

describe('FreeCashFlowToEquityCalComponent', () => {
  let component: FreeCashFlowToEquityCalComponent;
  let fixture: ComponentFixture<FreeCashFlowToEquityCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreeCashFlowToEquityCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeCashFlowToEquityCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
