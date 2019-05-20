import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivablesTurnoverRatioComponent } from './receivables-turnover-ratio.component';

describe('ReceivablesTurnoverRatioComponent', () => {
  let component: ReceivablesTurnoverRatioComponent;
  let fixture: ComponentFixture<ReceivablesTurnoverRatioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceivablesTurnoverRatioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceivablesTurnoverRatioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
