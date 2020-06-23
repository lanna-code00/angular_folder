import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamnametwoComponent } from './teamnametwo.component';

describe('TeamnametwoComponent', () => {
  let component: TeamnametwoComponent;
  let fixture: ComponentFixture<TeamnametwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamnametwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamnametwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
