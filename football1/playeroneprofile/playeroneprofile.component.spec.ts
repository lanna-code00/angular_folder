import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayeroneprofileComponent } from './playeroneprofile.component';

describe('PlayeroneprofileComponent', () => {
  let component: PlayeroneprofileComponent;
  let fixture: ComponentFixture<PlayeroneprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayeroneprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayeroneprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
