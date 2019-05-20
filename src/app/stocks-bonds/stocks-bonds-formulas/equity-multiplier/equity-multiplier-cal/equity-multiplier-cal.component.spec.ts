import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquityMultiplierCalComponent } from './equity-multiplier-cal.component';

describe('EquityMultiplierCalComponent', () => {
  let component: EquityMultiplierCalComponent;
  let fixture: ComponentFixture<EquityMultiplierCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquityMultiplierCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquityMultiplierCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
