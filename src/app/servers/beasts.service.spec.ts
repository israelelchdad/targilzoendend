import { TestBed } from '@angular/core/testing';

import { BeastsService } from './beasts.service';

describe('BeastsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BeastsService = TestBed.get(BeastsService);
    expect(service).toBeTruthy();
  });
});
