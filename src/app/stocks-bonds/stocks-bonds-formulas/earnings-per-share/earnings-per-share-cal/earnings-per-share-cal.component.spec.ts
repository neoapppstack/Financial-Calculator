import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EarningsPerShareCalComponent } from './earnings-per-share-cal.component';

describe('EarningsPerShareCalComponent', () => {
  let component: EarningsPerShareCalComponent;
  let fixture: ComponentFixture<EarningsPerShareCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EarningsPerShareCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EarningsPerShareCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
