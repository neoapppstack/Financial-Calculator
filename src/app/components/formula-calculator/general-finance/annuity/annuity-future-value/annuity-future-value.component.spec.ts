import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnuityFutureValueComponent } from './annuity-future-value.component';

describe('AnnuityFutureValueComponent', () => {
  let component: AnnuityFutureValueComponent;
  let fixture: ComponentFixture<AnnuityFutureValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnuityFutureValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnuityFutureValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
