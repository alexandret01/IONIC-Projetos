import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NotPage } from './not';

@NgModule({
  declarations: [
    NotPage,
  ],
  imports: [
    IonicPageModule.forChild(NotPage),
  ],
})
export class NotPageModule {}
