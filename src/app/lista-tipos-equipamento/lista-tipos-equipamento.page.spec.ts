import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListaTipoEquipamentoPage } from './lista-tipo-equipamento.page';

describe('ListaTipoEquipamentoPage', () => {
  let component: ListaTipoEquipamentoPage;
  let fixture: ComponentFixture<ListaTipoEquipamentoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaTipoEquipamentoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaTipoEquipamentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
