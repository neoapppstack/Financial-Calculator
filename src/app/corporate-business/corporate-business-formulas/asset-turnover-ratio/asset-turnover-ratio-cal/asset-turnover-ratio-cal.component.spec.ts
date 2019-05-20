import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetTurnoverRatioCalComponent } from './asset-turnover-ratio-cal.component';

describe('AssetTurnoverRatioCalComponent', () => {
  let component: AssetTurnoverRatioCalComponent;
  let fixture: ComponentFixture<AssetTurnoverRatioCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetTurnoverRatioCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetTurnoverRatioCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
