import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetPresentValueCalComponent } from './net-present-value-cal.component';

describe('NetPresentValueCalComponent', () => {
  let component: NetPresentValueCalComponent;
  let fixture: ComponentFixture<NetPresentValueCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetPresentValueCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetPresentValueCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
