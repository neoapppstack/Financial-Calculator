import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetAssetValueCalComponent } from './net-asset-value-cal.component';

describe('NetAssetValueCalComponent', () => {
  let component: NetAssetValueCalComponent;
  let fixture: ComponentFixture<NetAssetValueCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetAssetValueCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetAssetValueCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
