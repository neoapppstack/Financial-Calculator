import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetTurnoverRatioComponent } from './asset-turnover-ratio.component';

describe('AssetTurnoverRatioComponent', () => {
  let component: AssetTurnoverRatioComponent;
  let fixture: ComponentFixture<AssetTurnoverRatioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetTurnoverRatioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetTurnoverRatioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
