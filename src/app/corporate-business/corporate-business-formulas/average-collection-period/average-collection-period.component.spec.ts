import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AverageCollectionPeriodComponent } from './average-collection-period.component';

describe('AverageCollectionPeriodComponent', () => {
  let component: AverageCollectionPeriodComponent;
  let fixture: ComponentFixture<AverageCollectionPeriodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AverageCollectionPeriodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AverageCollectionPeriodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
