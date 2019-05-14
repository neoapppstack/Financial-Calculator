import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightedAverageCalComponent } from './weighted-average-cal.component';

describe('WeightedAverageCalComponent', () => {
  let component: WeightedAverageCalComponent;
  let fixture: ComponentFixture<WeightedAverageCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeightedAverageCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeightedAverageCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
