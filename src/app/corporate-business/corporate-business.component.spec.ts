import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorporateBusinessComponent } from './corporate-business.component';

describe('CorporateBusinessComponent', () => {
  let component: CorporateBusinessComponent;
  let fixture: ComponentFixture<CorporateBusinessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorporateBusinessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorporateBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
