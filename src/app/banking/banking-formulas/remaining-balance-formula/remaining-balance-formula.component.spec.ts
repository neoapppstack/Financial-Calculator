import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemainingBalanceFormulaComponent } from './remaining-balance-formula.component';

describe('RemainingBalanceFormulaComponent', () => {
  let component: RemainingBalanceFormulaComponent;
  let fixture: ComponentFixture<RemainingBalanceFormulaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemainingBalanceFormulaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemainingBalanceFormulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
