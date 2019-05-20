import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeCashFlowToEquityComponent } from './free-cash-flow-to-equity.component';

describe('FreeCashFlowToEquityComponent', () => {
  let component: FreeCashFlowToEquityComponent;
  let fixture: ComponentFixture<FreeCashFlowToEquityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreeCashFlowToEquityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeCashFlowToEquityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
