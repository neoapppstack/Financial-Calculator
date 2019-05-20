import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeometricMeanReturnComponent } from './deometric-mean-return.component';

describe('DeometricMeanReturnComponent', () => {
  let component: DeometricMeanReturnComponent;
  let fixture: ComponentFixture<DeometricMeanReturnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeometricMeanReturnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeometricMeanReturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
