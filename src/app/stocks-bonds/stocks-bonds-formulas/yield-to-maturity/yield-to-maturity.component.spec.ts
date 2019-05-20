import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YieldToMaturityComponent } from './yield-to-maturity.component';

describe('YieldToMaturityComponent', () => {
  let component: YieldToMaturityComponent;
  let fixture: ComponentFixture<YieldToMaturityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YieldToMaturityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YieldToMaturityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
