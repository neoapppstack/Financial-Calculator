import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetProfitMarginComponent } from './net-profit-margin.component';

describe('NetProfitMarginComponent', () => {
  let component: NetProfitMarginComponent;
  let fixture: ComponentFixture<NetProfitMarginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetProfitMarginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetProfitMarginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
