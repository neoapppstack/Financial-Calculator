import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoldingPeriodReturnCalComponent } from './holding-period-return-cal.component';

describe('HoldingPeriodReturnCalComponent', () => {
  let component: HoldingPeriodReturnCalComponent;
  let fixture: ComponentFixture<HoldingPeriodReturnCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoldingPeriodReturnCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoldingPeriodReturnCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
