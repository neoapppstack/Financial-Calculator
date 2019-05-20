import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapitalGainsYieldComponent } from './capital-gains-yield.component';

describe('CapitalGainsYieldComponent', () => {
  let component: CapitalGainsYieldComponent;
  let fixture: ComponentFixture<CapitalGainsYieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapitalGainsYieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapitalGainsYieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
