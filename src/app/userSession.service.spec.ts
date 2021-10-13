import { TestBed } from '@angular/core/testing';

import { UsersessionService } from './userSession.service';

describe('UsersessionService', () => {
  let service: UsersessionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersessionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
