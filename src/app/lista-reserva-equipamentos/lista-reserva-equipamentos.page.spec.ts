import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListaReservaEquipamentosPage } from './lista-reserva-equipamentos.page';

describe('ListaReservaEquipamentosPage', () => {
  let component: ListaReservaEquipamentosPage;
  let fixture: ComponentFixture<ListaReservaEquipamentosPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaReservaEquipamentosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaReservaEquipamentosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
