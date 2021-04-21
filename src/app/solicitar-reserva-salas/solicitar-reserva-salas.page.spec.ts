import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SolicitarReservaSalasPage } from './solicitar-reserva-salas.page';

describe('SolicitarReservaSalasPage', () => {
  let component: SolicitarReservaSalasPage;
  let fixture: ComponentFixture<SolicitarReservaSalasPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitarReservaSalasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SolicitarReservaSalasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
