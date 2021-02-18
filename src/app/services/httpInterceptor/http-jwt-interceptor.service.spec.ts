import { TestBed } from '@angular/core/testing';

import { HttpJWTInterceptorService } from './http-jwt-interceptor.service';

describe('HttpJWTInterceptorService', () => {
  let service: HttpJWTInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpJWTInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
