import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListaReservaDeSalasPage } from './lista-reserva-de-salas.page';

describe('ListaReservaDeSalasPage', () => {
  let component: ListaReservaDeSalasPage;
  let fixture: ComponentFixture<ListaReservaDeSalasPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaReservaDeSalasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaReservaDeSalasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
