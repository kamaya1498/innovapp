import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContenidoGaleriaPage } from './contenido-galeria.page';

const routes: Routes = [
  {
    path: '',
    component: ContenidoGaleriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContenidoGaleriaPageRoutingModule {}
