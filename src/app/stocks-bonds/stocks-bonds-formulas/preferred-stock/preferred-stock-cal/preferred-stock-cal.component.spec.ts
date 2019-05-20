import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreferredStockCalComponent } from './preferred-stock-cal.component';

describe('PreferredStockCalComponent', () => {
  let component: PreferredStockCalComponent;
  let fixture: ComponentFixture<PreferredStockCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreferredStockCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreferredStockCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
