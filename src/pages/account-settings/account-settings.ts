import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AccountSettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-account-settings',
  templateUrl: 'account-settings.html',
})
export class AccountSettingsPage {
  performances=[
    {head:'DISCUSSION', hp:'5234', rating:5},
    {head:'PREDICTION', hp:'2145',rating:4},
    {head:'WINNING STREAK', hp:'3429',rating:3},
    {head:'HAPPINESS INDEX', hp:'4563',rating:1}
  ];
  trophies=[
    {head:'BOUNCER', hp:'5234', trophies:[1,1,1]},
    {head:'HAND CRICKET', hp:'2145',trophies:[0,1,1]},
    {head:'BETTING', hp:'3429',trophies:[0,0,1]}
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountSettingsPage');
  }
  logout(){
    this.navCtrl.parent.parent.setRoot('WelcomePage');
  }
  openSettings(){
    this.navCtrl.push('SettingsPage')
  }
  openAllUsers(){
    this.navCtrl.push('AllUsersPage')
  }

}
