import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetProfitMarginCalComponent } from './net-profit-margin-cal.component';

describe('NetProfitMarginCalComponent', () => {
  let component: NetProfitMarginCalComponent;
  let fixture: ComponentFixture<NetProfitMarginCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetProfitMarginCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetProfitMarginCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
