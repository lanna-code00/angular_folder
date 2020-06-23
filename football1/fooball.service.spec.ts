import { TestBed } from '@angular/core/testing';

import { FooballService } from './fooball.service';

describe('FooballService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FooballService = TestBed.get(FooballService);
    expect(service).toBeTruthy();
  });
});
