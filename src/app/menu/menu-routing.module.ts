import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [{
      path: 'biblioteca',
    loadChildren: () => import('../biblioteca/biblioteca.module').then( m => m.BibliotecaPageModule)
    },
    {
      path: 'inicio',
      loadChildren: () => import('../inicio/inicio.module').then( m => m.InicioPageModule)
    },
    {
      path: 'cotiza',
      loadChildren: () => import('../cotiza/cotiza.module').then( m => m.CotizaPageModule)
    },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
