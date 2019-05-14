import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresentValueFactorComponent } from './present-value-factor.component';

describe('PresentValueFactorComponent', () => {
  let component: PresentValueFactorComponent;
  let fixture: ComponentFixture<PresentValueFactorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresentValueFactorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresentValueFactorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
