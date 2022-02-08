import { TestBed } from '@angular/core/testing';

import { LeadsService } from './leads.service';

describe('LeadService', () => {
  let service: LeadsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeadsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
