import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DividendsPerShareCalComponent } from './dividends-per-share-cal.component';

describe('DividendsPerShareCalComponent', () => {
  let component: DividendsPerShareCalComponent;
  let fixture: ComponentFixture<DividendsPerShareCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DividendsPerShareCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DividendsPerShareCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
