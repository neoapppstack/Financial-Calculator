import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YieldToMaturityCalComponent } from './yield-to-maturity-cal.component';

describe('YieldToMaturityCalComponent', () => {
  let component: YieldToMaturityCalComponent;
  let fixture: ComponentFixture<YieldToMaturityCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YieldToMaturityCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YieldToMaturityCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
