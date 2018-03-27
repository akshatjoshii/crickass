import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FaqPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-faq',
  templateUrl: 'faq.html',
})
export class FaqPage {
  faqs = [
    { title: "How to earn badges in discussions?", description: "" },
    { title: "How to earn trophies in interactive games?", description: "" },
    { title: "How to increase my profile rankings?", description: "" },
    { title: "How to enable tweets on my wall?", description: "." },
    { title: "How to disable notifications?", description: "" },
    { title: "How to find comments that I previously made", description: "" },
    { title: "Can I share cricket content op the app?", description: "" },
    { title: "How is my data being used?", description: "" },
    { title: "What is the significance of HP?", description: "" },
    { title: "Who developed this app", description: "" }

  ];
  shownGroup = null;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  toggleGroup(group) {
    if (this.isGroupShown(group)) {
      this.shownGroup = null;
    } else {
      this.shownGroup = group;
    }
  };

  isGroupShown(group) {
    return this.shownGroup === group;
  }
  openSettings(){
    this.navCtrl.push('SettingsPage')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FaqPage');
  }

}
