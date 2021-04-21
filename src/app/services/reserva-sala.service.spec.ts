import { TestBed } from '@angular/core/testing';

import { ReservaSalaService } from './reserva-sala.service';

describe('ReservaSalaService', () => {
  let service: ReservaSalaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReservaSalaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
