import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentValueOfGrowingPerpetuityCalComponent } from './present-value-of-growing-perpetuity-cal.component';

describe('PresentValueOfGrowingPerpetuityCalComponent', () => {
  let component: PresentValueOfGrowingPerpetuityCalComponent;
  let fixture: ComponentFixture<PresentValueOfGrowingPerpetuityCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentValueOfGrowingPerpetuityCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentValueOfGrowingPerpetuityCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
