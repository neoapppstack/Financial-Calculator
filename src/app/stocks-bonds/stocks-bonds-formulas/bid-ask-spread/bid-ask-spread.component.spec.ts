import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BidAskSpreadComponent } from './bid-ask-spread.component';

describe('BidAskSpreadComponent', () => {
  let component: BidAskSpreadComponent;
  let fixture: ComponentFixture<BidAskSpreadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BidAskSpreadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BidAskSpreadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
