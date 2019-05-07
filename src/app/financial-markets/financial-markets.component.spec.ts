import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialMarketsComponent } from './financial-markets.component';

describe('FinancialMarketsComponent', () => {
  let component: FinancialMarketsComponent;
  let fixture: ComponentFixture<FinancialMarketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancialMarketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialMarketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
