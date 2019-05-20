import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnOnAssetsComponent } from './return-on-assets.component';

describe('ReturnOnAssetsComponent', () => {
  let component: ReturnOnAssetsComponent;
  let fixture: ComponentFixture<ReturnOnAssetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnOnAssetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnOnAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
