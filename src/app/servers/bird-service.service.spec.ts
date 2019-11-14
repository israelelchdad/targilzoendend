import { TestBed } from '@angular/core/testing';

import { BirdServiceService } from './bird-service.service';

describe('BirdServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BirdServiceService = TestBed.get(BirdServiceService);
    expect(service).toBeTruthy();
  });
});
