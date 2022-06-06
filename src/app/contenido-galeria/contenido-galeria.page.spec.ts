import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ContenidoGaleriaPage } from './contenido-galeria.page';

describe('ContenidoGaleriaPage', () => {
  let component: ContenidoGaleriaPage;
  let fixture: ComponentFixture<ContenidoGaleriaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ContenidoGaleriaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ContenidoGaleriaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
