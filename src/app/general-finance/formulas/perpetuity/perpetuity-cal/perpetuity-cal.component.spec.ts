import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerpetuityCalComponent } from './perpetuity-cal.component';

describe('PerpetuityCalComponent', () => {
  let component: PerpetuityCalComponent;
  let fixture: ComponentFixture<PerpetuityCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerpetuityCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerpetuityCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
