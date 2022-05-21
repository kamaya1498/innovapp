import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes, CanActivate } from '@angular/router';
import { NoIngresadoGuard } from './no-ingresado.guard';
import {IngresadoGuard} from'./ingresado.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule),
    canActivate:[NoIngresadoGuard]
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule),
    canActivate:[NoIngresadoGuard]
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule),
    canActivate:[IngresadoGuard]
  },
  {
    path: 'contenido/:id',
    loadChildren: () => import('./contenido/contenido.module').then( m => m.ContenidoPageModule)
    ,canActivate:[IngresadoGuard]
    
  },
  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
