import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RuleOfSeventyTwoComponent } from './rule-of-seventy-two.component';

describe('RuleOfSeventyTwoComponent', () => {
  let component: RuleOfSeventyTwoComponent;
  let fixture: ComponentFixture<RuleOfSeventyTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RuleOfSeventyTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RuleOfSeventyTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
