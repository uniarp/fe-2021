import { TestBed } from '@angular/core/testing';

import { EntregaChaveService } from './entrega-chave.service';

describe('EntregaChaveService', () => {
  let service: EntregaChaveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntregaChaveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
