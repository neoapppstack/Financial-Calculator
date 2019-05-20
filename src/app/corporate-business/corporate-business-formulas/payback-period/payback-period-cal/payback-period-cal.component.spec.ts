import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaybackPeriodCalComponent } from './payback-period-cal.component';

describe('PaybackPeriodCalComponent', () => {
  let component: PaybackPeriodCalComponent;
  let fixture: ComponentFixture<PaybackPeriodCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaybackPeriodCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaybackPeriodCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
