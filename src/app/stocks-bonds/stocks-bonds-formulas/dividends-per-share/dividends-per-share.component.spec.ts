import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DividendsPerShareComponent } from './dividends-per-share.component';

describe('DividendsPerShareComponent', () => {
  let component: DividendsPerShareComponent;
  let fixture: ComponentFixture<DividendsPerShareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DividendsPerShareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DividendsPerShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
