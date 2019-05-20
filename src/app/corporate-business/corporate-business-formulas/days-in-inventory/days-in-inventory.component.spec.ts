import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaysInInventoryComponent } from './days-in-inventory.component';

describe('DaysInInventoryComponent', () => {
  let component: DaysInInventoryComponent;
  let fixture: ComponentFixture<DaysInInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaysInInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaysInInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
