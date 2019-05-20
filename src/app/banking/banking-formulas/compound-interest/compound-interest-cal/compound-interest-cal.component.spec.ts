import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompoundInterestCalComponent } from './compound-interest-cal.component';

describe('CompoundInterestCalComponent', () => {
  let component: CompoundInterestCalComponent;
  let fixture: ComponentFixture<CompoundInterestCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompoundInterestCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompoundInterestCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
