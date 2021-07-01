import { TestBed } from '@angular/core/testing';

import { AuthorizService } from './authoriz.service';

describe('AuthorizService', () => {
  let service: AuthorizService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthorizService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
