import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DividendYieldCalComponent } from './dividend-yield-cal.component';

describe('DividendYieldCalComponent', () => {
  let component: DividendYieldCalComponent;
  let fixture: ComponentFixture<DividendYieldCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DividendYieldCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DividendYieldCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
