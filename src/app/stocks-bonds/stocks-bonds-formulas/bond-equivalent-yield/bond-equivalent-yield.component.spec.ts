import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BondEquivalentYieldComponent } from './bond-equivalent-yield.component';

describe('BondEquivalentYieldComponent', () => {
  let component: BondEquivalentYieldComponent;
  let fixture: ComponentFixture<BondEquivalentYieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BondEquivalentYieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BondEquivalentYieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
