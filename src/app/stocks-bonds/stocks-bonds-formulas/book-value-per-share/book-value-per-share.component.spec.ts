import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookValuePerShareComponent } from './book-value-per-share.component';

describe('BookValuePerShareComponent', () => {
  let component: BookValuePerShareComponent;
  let fixture: ComponentFixture<BookValuePerShareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookValuePerShareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookValuePerShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
