import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentYieldComponent } from './current-yield.component';

describe('CurrentYieldComponent', () => {
  let component: CurrentYieldComponent;
  let fixture: ComponentFixture<CurrentYieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentYieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentYieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
