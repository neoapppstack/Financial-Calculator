import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DividendYieldComponent } from './dividend-yield.component';

describe('DividendYieldComponent', () => {
  let component: DividendYieldComponent;
  let fixture: ComponentFixture<DividendYieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DividendYieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DividendYieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
