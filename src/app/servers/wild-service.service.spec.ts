import { TestBed } from '@angular/core/testing';

import { WildServiceService } from './wild-service.service';

describe('WildServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WildServiceService = TestBed.get(WildServiceService);
    expect(service).toBeTruthy();
  });
});
