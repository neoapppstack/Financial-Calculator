import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleInterestCalComponent } from './simple-interest-cal.component';

describe('SimpleInterestCalComponent', () => {
  let component: SimpleInterestCalComponent;
  let fixture: ComponentFixture<SimpleInterestCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleInterestCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleInterestCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
