import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimatedEarningsComponent } from './estimated-earnings.component';

describe('EstimatedEarningsComponent', () => {
  let component: EstimatedEarningsComponent;
  let fixture: ComponentFixture<EstimatedEarningsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstimatedEarningsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstimatedEarningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
