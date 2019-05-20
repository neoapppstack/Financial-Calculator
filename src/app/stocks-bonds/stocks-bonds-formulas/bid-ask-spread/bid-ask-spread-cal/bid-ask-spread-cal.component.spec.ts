import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BidAskSpreadCalComponent } from './bid-ask-spread-cal.component';

describe('BidAskSpreadCalComponent', () => {
  let component: BidAskSpreadCalComponent;
  let fixture: ComponentFixture<BidAskSpreadCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BidAskSpreadCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BidAskSpreadCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
