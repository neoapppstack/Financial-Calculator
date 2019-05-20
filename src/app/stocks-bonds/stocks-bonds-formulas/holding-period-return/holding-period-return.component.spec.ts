import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoldingPeriodReturnComponent } from './holding-period-return.component';

describe('HoldingPeriodReturnComponent', () => {
  let component: HoldingPeriodReturnComponent;
  let fixture: ComponentFixture<HoldingPeriodReturnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoldingPeriodReturnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoldingPeriodReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
