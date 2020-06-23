import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Coach1profileComponent } from './coach1profile.component';

describe('Coach1profileComponent', () => {
  let component: Coach1profileComponent;
  let fixture: ComponentFixture<Coach1profileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Coach1profileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Coach1profileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
