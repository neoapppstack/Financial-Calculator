import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentValueOfAnnuityComponent } from './present-value-of-annuity.component';

describe('PresentValueOfAnnuityComponent', () => {
  let component: PresentValueOfAnnuityComponent;
  let fixture: ComponentFixture<PresentValueOfAnnuityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentValueOfAnnuityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentValueOfAnnuityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
