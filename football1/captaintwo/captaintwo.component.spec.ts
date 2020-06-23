import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptaintwoComponent } from './captaintwo.component';

describe('CaptaintwoComponent', () => {
  let component: CaptaintwoComponent;
  let fixture: ComponentFixture<CaptaintwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaptaintwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaptaintwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
