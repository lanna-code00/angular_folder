import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsstCaptainComponent } from './asst-captain.component';

describe('AsstCaptainComponent', () => {
  let component: AsstCaptainComponent;
  let fixture: ComponentFixture<AsstCaptainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsstCaptainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsstCaptainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
