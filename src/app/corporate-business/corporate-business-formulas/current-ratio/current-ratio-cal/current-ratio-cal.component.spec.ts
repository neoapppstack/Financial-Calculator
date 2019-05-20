import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentRatioCalComponent } from './current-ratio-cal.component';

describe('CurrentRatioCalComponent', () => {
  let component: CurrentRatioCalComponent;
  let fixture: ComponentFixture<CurrentRatioCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentRatioCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentRatioCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
