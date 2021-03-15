import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListaMateriaisEntreguesPage } from './lista-materiais-entregues.page';

describe('ListaMateriaisEntreguesPage', () => {
  let component: ListaMateriaisEntreguesPage;
  let fixture: ComponentFixture<ListaMateriaisEntreguesPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaMateriaisEntreguesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaMateriaisEntreguesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
