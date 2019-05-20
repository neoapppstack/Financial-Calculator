import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetWorkingCapitalComponent } from './net-working-capital.component';

describe('NetWorkingCapitalComponent', () => {
  let component: NetWorkingCapitalComponent;
  let fixture: ComponentFixture<NetWorkingCapitalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetWorkingCapitalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetWorkingCapitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
