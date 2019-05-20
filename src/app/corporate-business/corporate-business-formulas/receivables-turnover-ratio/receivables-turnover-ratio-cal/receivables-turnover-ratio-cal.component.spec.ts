import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivablesTurnoverRatioCalComponent } from './receivables-turnover-ratio-cal.component';

describe('ReceivablesTurnoverRatioCalComponent', () => {
  let component: ReceivablesTurnoverRatioCalComponent;
  let fixture: ComponentFixture<ReceivablesTurnoverRatioCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceivablesTurnoverRatioCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceivablesTurnoverRatioCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
