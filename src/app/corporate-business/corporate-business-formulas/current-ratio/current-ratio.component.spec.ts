import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentRatioComponent } from './current-ratio.component';

describe('CurrentRatioComponent', () => {
  let component: CurrentRatioComponent;
  let fixture: ComponentFixture<CurrentRatioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentRatioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentRatioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
