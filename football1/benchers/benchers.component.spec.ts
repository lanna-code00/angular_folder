import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BenchersComponent } from './benchers.component';

describe('BenchersComponent', () => {
  let component: BenchersComponent;
  let fixture: ComponentFixture<BenchersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BenchersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BenchersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
