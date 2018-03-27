import { Component } from '@angular/core';
import {IonicPage, MenuController, NavController, ToastController} from 'ionic-angular';
import {User} from "../../providers/user/user";
import {MainPage} from "../pages";

/**
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
*/
@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {
  account: { email: string, password: string } = {
    email: '' ,
    password: ''
  };
  private loginErrorString: string;
  constructor(public navCtrl: NavController,
              public user: User,
              public toastCtrl: ToastController,
              public menuCtrl: MenuController) { }

  doLogin() {
    this.user.login(this.account).subscribe((resp) => {
      this.navCtrl.push(MainPage);
    }, (err) => {
      this.navCtrl.push(MainPage);
      // Unable to log in
      let toast = this.toastCtrl.create({
        message: this.loginErrorString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  }
  signup() {
    this.navCtrl.push('SignupPage');
  }
  ionViewWillEnter(){
    this.menuCtrl.swipeEnable( false )
  }
  ionViewWillLeave(){
    this.menuCtrl.swipeEnable( true )
  }
}
