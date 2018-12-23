import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { FconoscoPage } from '../fconosco/fconosco';
import { LocalPage } from '../local/local';
import { QsomosPage } from '../qsomos/qsomos';
import { ParcPage } from '../parc/parc';
import { NotPage } from '../not/not';
import { RestPage } from '../rest/rest';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {

	constructor(public navCtrl: NavController) {

	}

	FconoscoPage() {
		this.navCtrl.push(FconoscoPage);
	}
	LocalPage() {
		this.navCtrl.push(LocalPage);
	}
	QsomosPage() {
		this.navCtrl.push(QsomosPage);
	}
	ParcPage() {
		this.navCtrl.push(ParcPage);
	}

	NotPage() {
		this.navCtrl.push(NotPage);
	}

	RestPage() {
		this.navCtrl.push(RestPage);
	}

}
