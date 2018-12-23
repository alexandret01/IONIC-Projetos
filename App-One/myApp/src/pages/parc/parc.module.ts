import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ParcPage } from './parc';

@NgModule({
  declarations: [
    ParcPage,
  ],
  imports: [
    IonicPageModule.forChild(ParcPage),
  ],
})
export class ParcPageModule {}
