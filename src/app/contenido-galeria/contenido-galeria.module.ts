import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContenidoGaleriaPageRoutingModule } from './contenido-galeria-routing.module';

import { ContenidoGaleriaPage } from './contenido-galeria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContenidoGaleriaPageRoutingModule
  ],
  declarations: [ContenidoGaleriaPage]
})
export class ContenidoGaleriaPageModule {}
