import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetentionRatioComponent } from './retention-ratio.component';

describe('RetentionRatioComponent', () => {
  let component: RetentionRatioComponent;
  let fixture: ComponentFixture<RetentionRatioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetentionRatioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetentionRatioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
