import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxEquivalentYieldCalComponent } from './tax-equivalent-yield-cal.component';

describe('TaxEquivalentYieldCalComponent', () => {
  let component: TaxEquivalentYieldCalComponent;
  let fixture: ComponentFixture<TaxEquivalentYieldCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxEquivalentYieldCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxEquivalentYieldCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
