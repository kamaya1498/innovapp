import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CotizaPage } from './cotiza.page';

const routes: Routes = [
  {
    path: '',
    component: CotizaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CotizaPageRoutingModule {}
