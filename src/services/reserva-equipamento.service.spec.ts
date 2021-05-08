import { TestBed } from '@angular/core/testing';

import { ReservaEquipamentoService } from './reserva-equipamento.service';

describe('ReservaEquipamentoService', () => {
  let service: ReservaEquipamentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReservaEquipamentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
