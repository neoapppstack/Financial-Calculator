import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxEquivalentYieldComponent } from './tax-equivalent-yield.component';

describe('TaxEquivalentYieldComponent', () => {
  let component: TaxEquivalentYieldComponent;
  let fixture: ComponentFixture<TaxEquivalentYieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaxEquivalentYieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxEquivalentYieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
