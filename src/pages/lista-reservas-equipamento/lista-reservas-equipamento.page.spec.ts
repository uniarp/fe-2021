import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListaReservasEquipamentoPage } from './lista-reservas-equipamento.page';

describe('ListaReservasEquipamentoPage', () => {
  let component: ListaReservasEquipamentoPage;
  let fixture: ComponentFixture<ListaReservasEquipamentoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaReservasEquipamentoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaReservasEquipamentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
