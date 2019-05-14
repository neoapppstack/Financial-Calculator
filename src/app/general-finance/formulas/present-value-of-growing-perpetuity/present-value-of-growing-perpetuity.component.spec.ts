import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentValueOfGrowingPerpetuityComponent } from './present-value-of-growing-perpetuity.component';

describe('PresentValueOfGrowingPerpetuityComponent', () => {
  let component: PresentValueOfGrowingPerpetuityComponent;
  let fixture: ComponentFixture<PresentValueOfGrowingPerpetuityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentValueOfGrowingPerpetuityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentValueOfGrowingPerpetuityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
