import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureValueFactorComponent } from './future-value-factor.component';

describe('FutureValueFactorComponent', () => {
  let component: FutureValueFactorComponent;
  let fixture: ComponentFixture<FutureValueFactorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FutureValueFactorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FutureValueFactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
