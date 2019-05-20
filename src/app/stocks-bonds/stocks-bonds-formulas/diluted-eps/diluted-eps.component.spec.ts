import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DilutedEpsComponent } from './diluted-eps.component';

describe('DilutedEpsComponent', () => {
  let component: DilutedEpsComponent;
  let fixture: ComponentFixture<DilutedEpsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DilutedEpsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DilutedEpsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
