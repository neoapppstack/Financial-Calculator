import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinuousCompoundingComponent } from './continuous-compounding.component';

describe('ContinuousCompoundingComponent', () => {
  let component: ContinuousCompoundingComponent;
  let fixture: ComponentFixture<ContinuousCompoundingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContinuousCompoundingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContinuousCompoundingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
