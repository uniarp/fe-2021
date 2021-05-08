import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListaReservasConfirmadasPage } from './lista-reservas-confirmadas.page';

describe('ListaReservasConfirmadasPage', () => {
  let component: ListaReservasConfirmadasPage;
  let fixture: ComponentFixture<ListaReservasConfirmadasPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaReservasConfirmadasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaReservasConfirmadasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
