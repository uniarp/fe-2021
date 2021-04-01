import { TestBed } from '@angular/core/testing';

import { VistoriaService } from './vistoria.service';

describe('VistoriaService', () => {
  let service: VistoriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VistoriaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
