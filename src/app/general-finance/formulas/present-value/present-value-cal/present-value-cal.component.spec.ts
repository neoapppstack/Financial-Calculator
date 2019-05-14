import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentValueCalComponent } from './present-value-cal.component';

describe('PresentValueCalComponent', () => {
  let component: PresentValueCalComponent;
  let fixture: ComponentFixture<PresentValueCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentValueCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentValueCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
