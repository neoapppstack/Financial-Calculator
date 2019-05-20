import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstimatedEarningsCalComponent } from './estimated-earnings-cal.component';

describe('EstimatedEarningsCalComponent', () => {
  let component: EstimatedEarningsCalComponent;
  let fixture: ComponentFixture<EstimatedEarningsCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstimatedEarningsCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstimatedEarningsCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
