import { TestBed } from '@angular/core/testing';

import { EntregaService } from './entrega.service';

describe('EntregaService', () => {
  let service: EntregaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntregaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
