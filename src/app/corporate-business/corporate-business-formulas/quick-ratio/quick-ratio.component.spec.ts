import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickRatioComponent } from './quick-ratio.component';

describe('QuickRatioComponent', () => {
  let component: QuickRatioComponent;
  let fixture: ComponentFixture<QuickRatioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickRatioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickRatioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
