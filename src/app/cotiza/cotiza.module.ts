import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';


import { CotizaPageRoutingModule } from './cotiza-routing.module';

import { CotizaPage } from './cotiza.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CotizaPageRoutingModule,
   
    
  ],
  declarations: [CotizaPage]
})
export class CotizaPageModule {}
