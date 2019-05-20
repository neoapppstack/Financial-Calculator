import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapitalGainsYieldCalComponent } from './capital-gains-yield-cal.component';

describe('CapitalGainsYieldCalComponent', () => {
  let component: CapitalGainsYieldCalComponent;
  let fixture: ComponentFixture<CapitalGainsYieldCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapitalGainsYieldCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapitalGainsYieldCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
