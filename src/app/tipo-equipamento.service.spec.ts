import { TestBed } from '@angular/core/testing';

import { TipoEquipamentoService } from './tipo-equipamento.service';

describe('TipoEquipamentoService', () => {
  let service: TipoEquipamentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoEquipamentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
