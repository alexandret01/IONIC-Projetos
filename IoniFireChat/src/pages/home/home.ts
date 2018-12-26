import { UserProvider } from './../../providers/user/user';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { User } from './../../models/user.model';
import { AngularFireDatabase, AngularFireObject, AngularFireList} from "angularfire2/database";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  users: AngularFireList<any[]>;

  constructor(
    public navCtrl: NavController,
    public userService: UserProvider
    ) {

  }

  ionViewDidLoad(){
    this.users = this.userService.users;
  }

  onChatCreate(user:User): void{
    console.log('User: ', user);
  }

  onSignup(): void{
    this.navCtrl.push(SignupPage)
  }

}
