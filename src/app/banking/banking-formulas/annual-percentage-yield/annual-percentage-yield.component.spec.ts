import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnualPercentageYieldComponent } from './annual-percentage-yield.component';

describe('AnnualPercentageYieldComponent', () => {
  let component: AnnualPercentageYieldComponent;
  let fixture: ComponentFixture<AnnualPercentageYieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnualPercentageYieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnualPercentageYieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
