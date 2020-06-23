import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersoneComponent } from './playersone.component';

describe('PlayersoneComponent', () => {
  let component: PlayersoneComponent;
  let fixture: ComponentFixture<PlayersoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayersoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
