import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RateOfInflationComponent } from './rate-of-inflation.component';

describe('RateOfInflationComponent', () => {
  let component: RateOfInflationComponent;
  let fixture: ComponentFixture<RateOfInflationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RateOfInflationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RateOfInflationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
