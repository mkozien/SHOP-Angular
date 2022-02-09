import { TestBed } from '@angular/core/testing';

import { BoughtProductsService } from './bought-products.service';

describe('BoughtProductsService', () => {
  let service: BoughtProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoughtProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
