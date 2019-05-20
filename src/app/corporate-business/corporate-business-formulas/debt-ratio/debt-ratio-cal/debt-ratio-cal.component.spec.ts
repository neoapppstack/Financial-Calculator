import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebtRatioCalComponent } from './debt-ratio-cal.component';

describe('DebtRatioCalComponent', () => {
  let component: DebtRatioCalComponent;
  let fixture: ComponentFixture<DebtRatioCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebtRatioCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebtRatioCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
