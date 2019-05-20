import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BondEquivalentYieldCalComponent } from './bond-equivalent-yield-cal.component';

describe('BondEquivalentYieldCalComponent', () => {
  let component: BondEquivalentYieldCalComponent;
  let fixture: ComponentFixture<BondEquivalentYieldCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BondEquivalentYieldCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BondEquivalentYieldCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
