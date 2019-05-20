import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeCashFlowToFirmComponent } from './free-cash-flow-to-firm.component';

describe('FreeCashFlowToFirmComponent', () => {
  let component: FreeCashFlowToFirmComponent;
  let fixture: ComponentFixture<FreeCashFlowToFirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreeCashFlowToFirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeCashFlowToFirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
