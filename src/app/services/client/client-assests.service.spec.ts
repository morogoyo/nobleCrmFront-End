import { TestBed } from '@angular/core/testing';

import { ClientAssestsService } from './client-assests.service';

describe('ClientAssestsService', () => {
  let service: ClientAssestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientAssestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
