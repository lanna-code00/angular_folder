import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayertwoprofileComponent } from './playertwoprofile.component';

describe('PlayertwoprofileComponent', () => {
  let component: PlayertwoprofileComponent;
  let fixture: ComponentFixture<PlayertwoprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayertwoprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayertwoprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
