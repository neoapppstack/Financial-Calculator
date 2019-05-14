import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoublingTimeComponent } from './doubling-time.component';

describe('DoublingTimeComponent', () => {
  let component: DoublingTimeComponent;
  let fixture: ComponentFixture<DoublingTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoublingTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoublingTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
