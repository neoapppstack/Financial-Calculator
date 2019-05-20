import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeCashFlowToFirmCalComponent } from './free-cash-flow-to-firm-cal.component';

describe('FreeCashFlowToFirmCalComponent', () => {
  let component: FreeCashFlowToFirmCalComponent;
  let fixture: ComponentFixture<FreeCashFlowToFirmCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreeCashFlowToFirmCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeCashFlowToFirmCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
