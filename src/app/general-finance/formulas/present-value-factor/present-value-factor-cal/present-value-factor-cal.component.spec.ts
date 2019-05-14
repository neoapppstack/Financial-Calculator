import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentValueFactorCalComponent } from './present-value-factor-cal.component';

describe('PresentValueFactorCalComponent', () => {
  let component: PresentValueFactorCalComponent;
  let fixture: ComponentFixture<PresentValueFactorCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentValueFactorCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentValueFactorCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
