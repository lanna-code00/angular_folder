import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RhodaComponent } from './rhoda.component';

describe('RhodaComponent', () => {
  let component: RhodaComponent;
  let fixture: ComponentFixture<RhodaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RhodaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RhodaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
