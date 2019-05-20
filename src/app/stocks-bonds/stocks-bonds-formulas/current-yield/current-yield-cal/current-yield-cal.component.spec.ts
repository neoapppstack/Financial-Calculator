import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentYieldCalComponent } from './current-yield-cal.component';

describe('CurrentYieldCalComponent', () => {
  let component: CurrentYieldCalComponent;
  let fixture: ComponentFixture<CurrentYieldCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentYieldCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentYieldCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
