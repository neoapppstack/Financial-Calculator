import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickRatioCalComponent } from './quick-ratio-cal.component';

describe('QuickRatioCalComponent', () => {
  let component: QuickRatioCalComponent;
  let fixture: ComponentFixture<QuickRatioCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickRatioCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickRatioCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
