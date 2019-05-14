import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FutureValueCalComponent } from './future-value-cal.component';

describe('FutureValueCalComponent', () => {
  let component: FutureValueCalComponent;
  let fixture: ComponentFixture<FutureValueCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FutureValueCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FutureValueCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
