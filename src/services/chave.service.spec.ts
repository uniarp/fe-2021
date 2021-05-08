import { TestBed } from '@angular/core/testing';

import { ChaveService } from './chave.service';

describe('ChaveService', () => {
  let service: ChaveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChaveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
