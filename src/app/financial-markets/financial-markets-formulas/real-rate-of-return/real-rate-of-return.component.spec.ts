import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealRateOfReturnComponent } from './real-rate-of-return.component';

describe('RealRateOfReturnComponent', () => {
  let component: RealRateOfReturnComponent;
  let fixture: ComponentFixture<RealRateOfReturnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealRateOfReturnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealRateOfReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
