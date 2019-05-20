import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinuousCompoundingCalComponent } from './continuous-compounding-cal.component';

describe('ContinuousCompoundingCalComponent', () => {
  let component: ContinuousCompoundingCalComponent;
  let fixture: ComponentFixture<ContinuousCompoundingCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContinuousCompoundingCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContinuousCompoundingCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
