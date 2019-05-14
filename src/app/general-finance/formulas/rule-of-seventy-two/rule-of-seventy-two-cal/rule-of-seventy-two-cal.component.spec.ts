import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RuleOfSeventyTwoCalComponent } from './rule-of-seventy-two-cal.component';

describe('RuleOfSeventyTwoCalComponent', () => {
  let component: RuleOfSeventyTwoCalComponent;
  let fixture: ComponentFixture<RuleOfSeventyTwoCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuleOfSeventyTwoCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuleOfSeventyTwoCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
