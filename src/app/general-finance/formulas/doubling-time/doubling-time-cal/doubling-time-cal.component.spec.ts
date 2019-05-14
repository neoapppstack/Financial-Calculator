import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoublingTimeCalComponent } from './doubling-time-cal.component';

describe('DoublingTimeCalComponent', () => {
  let component: DoublingTimeCalComponent;
  let fixture: ComponentFixture<DoublingTimeCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoublingTimeCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoublingTimeCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
