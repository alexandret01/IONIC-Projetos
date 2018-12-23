import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { FconoscoPage } from '../pages/fconosco/fconosco';
import { LocalPage } from '../pages/local/local';
import { QsomosPage } from '../pages/qsomos/qsomos';
import { ParcPage } from '../pages/parc/parc';
import { NotPage } from '../pages/not/not';
import { RestPage } from '../pages/rest/rest';
import { AlertController } from 'ionic-angular';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any, icon:any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage, icon: 'home'},
      { title: 'Quem Somos?', component: QsomosPage, icon: 'ios-home-outline' },
      { title: 'Localização', component: LocalPage, icon: 'ios-home-outline' },
      { title: 'Fale Conosco', component: FconoscoPage, icon: 'ios-home-outline' },
      { title: 'Parceiros', component: ParcPage, icon: 'ios-home-outline' },
      { title: 'Notícias', component: NotPage, icon: 'ios-home-outline' },
      { title: 'Área Restrita', component: RestPage, icon: 'ios-home-outline' },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
