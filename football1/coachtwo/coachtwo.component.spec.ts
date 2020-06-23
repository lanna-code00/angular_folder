import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachtwoComponent } from './coachtwo.component';

describe('CoachtwoComponent', () => {
  let component: CoachtwoComponent;
  let fixture: ComponentFixture<CoachtwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachtwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachtwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
