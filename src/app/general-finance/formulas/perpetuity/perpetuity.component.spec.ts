import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerpetuityComponent } from './perpetuity.component';

describe('PerpetuityComponent', () => {
  let component: PerpetuityComponent;
  let fixture: ComponentFixture<PerpetuityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerpetuityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerpetuityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
