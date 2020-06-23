import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BencherstwoComponent } from './bencherstwo.component';

describe('BencherstwoComponent', () => {
  let component: BencherstwoComponent;
  let fixture: ComponentFixture<BencherstwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BencherstwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BencherstwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
