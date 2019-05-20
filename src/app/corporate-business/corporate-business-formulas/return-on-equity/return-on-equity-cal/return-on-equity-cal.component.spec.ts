import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnOnEquityCalComponent } from './return-on-equity-cal.component';

describe('ReturnOnEquityCalComponent', () => {
  let component: ReturnOnEquityCalComponent;
  let fixture: ComponentFixture<ReturnOnEquityCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnOnEquityCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnOnEquityCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
