import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnOnEquityComponent } from './return-on-equity.component';

describe('ReturnOnEquityComponent', () => {
  let component: ReturnOnEquityComponent;
  let fixture: ComponentFixture<ReturnOnEquityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnOnEquityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnOnEquityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
