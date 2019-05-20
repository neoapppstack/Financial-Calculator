import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DilutedEpsCalComponent } from './diluted-eps-cal.component';

describe('DilutedEpsCalComponent', () => {
  let component: DilutedEpsCalComponent;
  let fixture: ComponentFixture<DilutedEpsCalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DilutedEpsCalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DilutedEpsCalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
