import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Dam1PageRoutingModule } from './dam1-routing.module';

import { Dam1Page } from './dam1.page';
import { ComponentesModule } from 'src/app/componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Dam1PageRoutingModule,
    ComponentesModule
  ],
  declarations: [Dam1Page]
})
export class Dam1PageModule {}
