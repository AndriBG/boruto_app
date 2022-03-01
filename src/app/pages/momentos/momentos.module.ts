import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MomentosPageRoutingModule } from './momentos-routing.module';

import { MomentosPage } from './momentos.page';
import { ModalPage } from './modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MomentosPageRoutingModule
  ],
  declarations: [MomentosPage, ModalPage],
  entryComponents: [ModalPage]
})
export class MomentosPageModule {}
