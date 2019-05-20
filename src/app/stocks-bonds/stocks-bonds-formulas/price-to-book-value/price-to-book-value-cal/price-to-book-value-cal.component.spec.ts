import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceToBookValueCalComponent } from './price-to-book-value-cal.component';

describe('PriceToBookValueCalComponent', () => {
  let component: PriceToBookValueCalComponent;
  let fixture: ComponentFixture<PriceToBookValueCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceToBookValueCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceToBookValueCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
