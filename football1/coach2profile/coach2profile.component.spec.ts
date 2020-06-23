import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Coach2profileComponent } from './coach2profile.component';

describe('Coach2profileComponent', () => {
  let component: Coach2profileComponent;
  let fixture: ComponentFixture<Coach2profileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Coach2profileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Coach2profileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
