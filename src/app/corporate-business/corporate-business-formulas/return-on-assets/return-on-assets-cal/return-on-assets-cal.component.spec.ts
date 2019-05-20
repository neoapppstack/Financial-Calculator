import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnOnAssetsCalComponent } from './return-on-assets-cal.component';

describe('ReturnOnAssetsCalComponent', () => {
  let component: ReturnOnAssetsCalComponent;
  let fixture: ComponentFixture<ReturnOnAssetsCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnOnAssetsCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnOnAssetsCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
