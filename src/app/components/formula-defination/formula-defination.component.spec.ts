import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaDefinationComponent } from './formula-defination.component';

describe('FormulaDefinationComponent', () => {
  let component: FormulaDefinationComponent;
  let fixture: ComponentFixture<FormulaDefinationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulaDefinationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaDefinationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
