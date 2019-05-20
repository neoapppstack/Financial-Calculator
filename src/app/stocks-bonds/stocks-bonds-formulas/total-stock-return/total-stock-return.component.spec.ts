import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalStockReturnComponent } from './total-stock-return.component';

describe('TotalStockReturnComponent', () => {
  let component: TotalStockReturnComponent;
  let fixture: ComponentFixture<TotalStockReturnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalStockReturnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalStockReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
