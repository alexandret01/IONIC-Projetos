import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { QsomosPage } from './qsomos';

@NgModule({
  declarations: [
    QsomosPage,
  ],
  imports: [
    IonicPageModule.forChild(QsomosPage),
  ],
})
export class QsomosPageModule {}
