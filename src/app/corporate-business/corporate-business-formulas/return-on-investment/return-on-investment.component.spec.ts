import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnOnInvestmentComponent } from './return-on-investment.component';

describe('ReturnOnInvestmentComponent', () => {
  let component: ReturnOnInvestmentComponent;
  let fixture: ComponentFixture<ReturnOnInvestmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnOnInvestmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnOnInvestmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
