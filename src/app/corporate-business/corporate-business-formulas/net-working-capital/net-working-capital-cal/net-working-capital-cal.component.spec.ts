import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetWorkingCapitalCalComponent } from './net-working-capital-cal.component';

describe('NetWorkingCapitalCalComponent', () => {
  let component: NetWorkingCapitalCalComponent;
  let fixture: ComponentFixture<NetWorkingCapitalCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetWorkingCapitalCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetWorkingCapitalCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
