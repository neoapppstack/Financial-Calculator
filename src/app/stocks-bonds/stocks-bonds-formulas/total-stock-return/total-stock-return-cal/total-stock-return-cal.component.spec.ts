import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalStockReturnCalComponent } from './total-stock-return-cal.component';

describe('TotalStockReturnCalComponent', () => {
  let component: TotalStockReturnCalComponent;
  let fixture: ComponentFixture<TotalStockReturnCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalStockReturnCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalStockReturnCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
