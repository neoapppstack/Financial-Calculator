import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeometricMeanReturnCalComponent } from './deometric-mean-return-cal.component';

describe('DeometricMeanReturnCalComponent', () => {
  let component: DeometricMeanReturnCalComponent;
  let fixture: ComponentFixture<DeometricMeanReturnCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeometricMeanReturnCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeometricMeanReturnCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
