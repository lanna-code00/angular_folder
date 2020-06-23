import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerstwoComponent } from './playerstwo.component';

describe('PlayerstwoComponent', () => {
  let component: PlayerstwoComponent;
  let fixture: ComponentFixture<PlayerstwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerstwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerstwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
