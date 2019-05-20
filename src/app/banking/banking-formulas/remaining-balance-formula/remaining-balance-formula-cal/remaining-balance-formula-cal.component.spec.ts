import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemainingBalanceFormulaCalComponent } from './remaining-balance-formula-cal.component';

describe('RemainingBalanceFormulaCalComponent', () => {
  let component: RemainingBalanceFormulaCalComponent;
  let fixture: ComponentFixture<RemainingBalanceFormulaCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemainingBalanceFormulaCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemainingBalanceFormulaCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
