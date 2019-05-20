import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookValuePerShareValComponent } from './book-value-per-share-val.component';

describe('BookValuePerShareValComponent', () => {
  let component: BookValuePerShareValComponent;
  let fixture: ComponentFixture<BookValuePerShareValComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookValuePerShareValComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookValuePerShareValComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
