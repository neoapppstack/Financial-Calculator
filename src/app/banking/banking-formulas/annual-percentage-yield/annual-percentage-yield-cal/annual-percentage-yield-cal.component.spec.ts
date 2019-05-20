import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnualPercentageYieldCalComponent } from './annual-percentage-yield-cal.component';

describe('AnnualPercentageYieldCalComponent', () => {
  let component: AnnualPercentageYieldCalComponent;
  let fixture: ComponentFixture<AnnualPercentageYieldCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnualPercentageYieldCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnualPercentageYieldCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
