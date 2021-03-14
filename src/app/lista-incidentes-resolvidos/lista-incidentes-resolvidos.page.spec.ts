import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListaIncidentesResolvidosPage } from './lista-incidentes-resolvidos.page';

describe('ListaIncidentesResolvidosPage', () => {
  let component: ListaIncidentesResolvidosPage;
  let fixture: ComponentFixture<ListaIncidentesResolvidosPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaIncidentesResolvidosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaIncidentesResolvidosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
