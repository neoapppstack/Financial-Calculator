import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoublingTimeSimpleInterestCalComponent } from './doubling-time-simple-interest-cal.component';

describe('DoublingTimeSimpleInterestCalComponent', () => {
  let component: DoublingTimeSimpleInterestCalComponent;
  let fixture: ComponentFixture<DoublingTimeSimpleInterestCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoublingTimeSimpleInterestCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoublingTimeSimpleInterestCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
