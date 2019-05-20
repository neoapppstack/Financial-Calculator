import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquityMultiplierComponent } from './equity-multiplier.component';

describe('EquityMultiplierComponent', () => {
  let component: EquityMultiplierComponent;
  let fixture: ComponentFixture<EquityMultiplierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquityMultiplierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquityMultiplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
