import { Component } from '@angular/core';
import {IonicPage, MenuController, NavController, ToastController} from 'ionic-angular';
import { User } from '../../providers/providers';
import { MainPage } from '../pages';
import {WelcomePage} from "../welcome/welcome";

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

  account: { name: string, email: string,username:string, password: string } = {
    name: '',
    email: '',
    username: '',
    password: ''
  };

  // Our translated text strings
  private signupErrorString: string;

  constructor(public navCtrl: NavController,
              public user: User,
              public toastCtrl: ToastController,
              public menuCtrl: MenuController) {
  }

  doSignup() {
    // Attempt to login in through our User service
    this.user.signup(this.account).subscribe((resp) => {
      this.navCtrl.push(MainPage);
    }, (err) => {

      this.navCtrl.push(MainPage);

      // Unable to sign up
      let toast = this.toastCtrl.create({
        message: this.signupErrorString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  }
  signin(){
    this.navCtrl.setRoot('WelcomePage')
  }
  ionViewWillEnter(){
    this.menuCtrl.swipeEnable( false )
  }
  ionViewWillLeave(){
    this.menuCtrl.swipeEnable( true )
  }
}
