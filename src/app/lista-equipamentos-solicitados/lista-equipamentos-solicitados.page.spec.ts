import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListaEquipamentosSolicitadosPage } from './lista-equipamentos-solicitados.page';

describe('ListaEquipamentosSolicitadosPage', () => {
  let component: ListaEquipamentosSolicitadosPage;
  let fixture: ComponentFixture<ListaEquipamentosSolicitadosPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaEquipamentosSolicitadosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaEquipamentosSolicitadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
