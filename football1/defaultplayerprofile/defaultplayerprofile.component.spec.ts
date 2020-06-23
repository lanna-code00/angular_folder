import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultplayerprofileComponent } from './defaultplayerprofile.component';

describe('DefaultplayerprofileComponent', () => {
  let component: DefaultplayerprofileComponent;
  let fixture: ComponentFixture<DefaultplayerprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultplayerprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultplayerprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
