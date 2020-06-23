import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamoneComponent } from './teamone.component';

describe('TeamoneComponent', () => {
  let component: TeamoneComponent;
  let fixture: ComponentFixture<TeamoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
