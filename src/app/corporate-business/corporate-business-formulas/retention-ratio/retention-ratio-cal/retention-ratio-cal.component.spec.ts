import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetentionRatioCalComponent } from './retention-ratio-cal.component';

describe('RetentionRatioCalComponent', () => {
  let component: RetentionRatioCalComponent;
  let fixture: ComponentFixture<RetentionRatioCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetentionRatioCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetentionRatioCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
