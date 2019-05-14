import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightedAverageComponent } from './weighted-average.component';

describe('WeightedAverageComponent', () => {
  let component: WeightedAverageComponent;
  let fixture: ComponentFixture<WeightedAverageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeightedAverageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeightedAverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
