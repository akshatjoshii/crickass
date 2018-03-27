import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AllUsersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-all-users',
  templateUrl: 'all-users.html',
})
export class AllUsersPage {
  personList=[
    {name:'akshat',hp:23453,rank:342},
    {name:'akshat',hp:23453,rank:342},
    {name:'akshat',hp:23453,rank:342},
    {name:'akshat',hp:23453,rank:342},
    {name:'akshat',hp:23453,rank:342},
    {name:'akshat',hp:23453,rank:342},
    {name:'akshat',hp:23453,rank:342},
    {name:'akshat',hp:23453,rank:342},
    {name:'akshat',hp:23453,rank:342},
    {name:'akshat',hp:23453,rank:342},
    {name:'akshat',hp:23453,rank:342},
    {name:'akshat',hp:23453,rank:342},
    {name:'akshat',hp:23453,rank:342},
    {name:'akshat',hp:23453,rank:342},
    {name:'akshat',hp:23453,rank:342}
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  openSettings(){
    this.navCtrl.push('SettingsPage')
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AllUsersPage');
  }

}
