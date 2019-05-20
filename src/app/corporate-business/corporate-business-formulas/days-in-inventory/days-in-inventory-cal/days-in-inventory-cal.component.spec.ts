import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaysInInventoryCalComponent } from './days-in-inventory-cal.component';

describe('DaysInInventoryCalComponent', () => {
  let component: DaysInInventoryCalComponent;
  let fixture: ComponentFixture<DaysInInventoryCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaysInInventoryCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaysInInventoryCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
