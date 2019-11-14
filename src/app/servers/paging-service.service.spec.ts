import { TestBed } from '@angular/core/testing';

import { PagingServiceService } from './paging-service.service';

describe('PagingServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PagingServiceService = TestBed.get(PagingServiceService);
    expect(service).toBeTruthy();
  });
});
