import { TestBed } from '@angular/core/testing';

import { AjazServiceService } from './ajaz-service.service';

describe('AjazServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AjazServiceService = TestBed.get(AjazServiceService);
    expect(service).toBeTruthy();
  });
});
