import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CadastroTipoEquipamentoPage } from './cadastro-tipo-equipamento.page';

describe('CadastroTipoEquipamentoPage', () => {
  let component: CadastroTipoEquipamentoPage;
  let fixture: ComponentFixture<CadastroTipoEquipamentoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroTipoEquipamentoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CadastroTipoEquipamentoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
