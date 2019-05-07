import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StocksBondsComponent } from './stocks-bonds.component';

describe('StocksBondsComponent', () => {
  let component: StocksBondsComponent;
  let fixture: ComponentFixture<StocksBondsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StocksBondsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StocksBondsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
