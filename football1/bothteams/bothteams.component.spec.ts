import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BothteamsComponent } from './bothteams.component';

describe('BothteamsComponent', () => {
  let component: BothteamsComponent;
  let fixture: ComponentFixture<BothteamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BothteamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BothteamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
