import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoublingTimeSimpleInterestComponent } from './doubling-time-simple-interest.component';

describe('DoublingTimeSimpleInterestComponent', () => {
  let component: DoublingTimeSimpleInterestComponent;
  let fixture: ComponentFixture<DoublingTimeSimpleInterestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoublingTimeSimpleInterestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoublingTimeSimpleInterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
