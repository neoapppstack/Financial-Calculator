import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebtRatioComponent } from './debt-ratio.component';

describe('DebtRatioComponent', () => {
  let component: DebtRatioComponent;
  let fixture: ComponentFixture<DebtRatioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebtRatioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebtRatioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
