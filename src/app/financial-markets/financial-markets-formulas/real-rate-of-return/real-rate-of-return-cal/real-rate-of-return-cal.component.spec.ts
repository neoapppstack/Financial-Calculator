import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealRateOfReturnCalComponent } from './real-rate-of-return-cal.component';

describe('RealRateOfReturnCalComponent', () => {
  let component: RealRateOfReturnCalComponent;
  let fixture: ComponentFixture<RealRateOfReturnCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealRateOfReturnCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealRateOfReturnCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
