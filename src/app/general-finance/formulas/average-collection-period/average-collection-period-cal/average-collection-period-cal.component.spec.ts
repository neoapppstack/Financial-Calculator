import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AverageCollectionPeriodCalComponent } from './average-collection-period-cal.component';

describe('AverageCollectionPeriodCalComponent', () => {
  let component: AverageCollectionPeriodCalComponent;
  let fixture: ComponentFixture<AverageCollectionPeriodCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AverageCollectionPeriodCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AverageCollectionPeriodCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
