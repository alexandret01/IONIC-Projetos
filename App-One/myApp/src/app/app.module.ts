import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FconoscoPage } from '../pages/fconosco/fconosco';
import { LocalPage } from '../pages/local/local';
import { QsomosPage } from '../pages/qsomos/qsomos';
import { ParcPage } from '../pages/parc/parc';
import { NotPage } from '../pages/not/not';
import { RestPage } from '../pages/rest/rest';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Camera } from '@ionic-native/camera';
import { EmailComposer } from '@ionic-native/email-composer';
import { EmailProvider } from '../providers/email/email';
import { ImageProvider } from '../providers/image/image';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FconoscoPage,
    LocalPage,
    QsomosPage,
    ParcPage,
    NotPage,
    RestPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FconoscoPage,
    LocalPage,
    QsomosPage,
    ParcPage,
    NotPage,
    RestPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    EmailComposer,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    EmailProvider,
    ImageProvider,
    ImageProvider
  ]
})
export class AppModule {}
