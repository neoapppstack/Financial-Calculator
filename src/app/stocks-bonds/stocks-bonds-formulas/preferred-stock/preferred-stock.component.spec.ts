import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreferredStockComponent } from './preferred-stock.component';

describe('PreferredStockComponent', () => {
  let component: PreferredStockComponent;
  let fixture: ComponentFixture<PreferredStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreferredStockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreferredStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
