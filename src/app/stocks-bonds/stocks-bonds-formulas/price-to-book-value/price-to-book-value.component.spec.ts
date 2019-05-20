import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceToBookValueComponent } from './price-to-book-value.component';

describe('PriceToBookValueComponent', () => {
  let component: PriceToBookValueComponent;
  let fixture: ComponentFixture<PriceToBookValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceToBookValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceToBookValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
