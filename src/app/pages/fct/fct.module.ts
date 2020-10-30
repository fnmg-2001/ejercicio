import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FctPageRoutingModule } from './fct-routing.module';

import { FctPage } from './fct.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FctPageRoutingModule,
    ComponentesModule
  ],
  declarations: [FctPage]
})
export class FctPageModule {}
