import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureValueFactorCalComponent } from './future-value-factor-cal.component';

describe('FutureValueFactorCalComponent', () => {
  let component: FutureValueFactorCalComponent;
  let fixture: ComponentFixture<FutureValueFactorCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FutureValueFactorCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FutureValueFactorCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
