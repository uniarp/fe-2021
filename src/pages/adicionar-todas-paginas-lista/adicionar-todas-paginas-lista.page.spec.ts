import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AdicionarTodasPaginasListaPage } from './adicionar-todas-paginas-lista.page';

describe('AdicionarTodasPaginasListaPage', () => {
  let component: AdicionarTodasPaginasListaPage;
  let fixture: ComponentFixture<AdicionarTodasPaginasListaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AdicionarTodasPaginasListaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AdicionarTodasPaginasListaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
