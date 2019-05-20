import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetAssetValueComponent } from './net-asset-value.component';

describe('NetAssetValueComponent', () => {
  let component: NetAssetValueComponent;
  let fixture: ComponentFixture<NetAssetValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetAssetValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetAssetValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
