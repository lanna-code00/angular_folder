import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamtwoComponent } from './teamtwo.component';

describe('TeamtwoComponent', () => {
  let component: TeamtwoComponent;
  let fixture: ComponentFixture<TeamtwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamtwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamtwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
