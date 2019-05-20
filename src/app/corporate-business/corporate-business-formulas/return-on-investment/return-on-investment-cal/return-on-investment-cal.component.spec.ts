import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnOnInvestmentCalComponent } from './return-on-investment-cal.component';

describe('ReturnOnInvestmentCalComponent', () => {
  let component: ReturnOnInvestmentCalComponent;
  let fixture: ComponentFixture<ReturnOnInvestmentCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnOnInvestmentCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnOnInvestmentCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
