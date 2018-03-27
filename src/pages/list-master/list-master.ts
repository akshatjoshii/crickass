import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';

import { Item } from '../../models/item';
import { Items } from '../../providers/providers';

@IonicPage()
@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListMasterPage {
  currentItems: Item[];
  videos = [
    { img:"../../assets/img/splashbg.png", type: "Trivia", description: "Facts about Dhoni that you may not have heard of but not miss if you are a fan" },
    { img:"../../assets/img/splashbg.png", type: "Analysis", description: "An analysis of the top 11 players who make IPL worth watching for all cricket fans" }
    ];
  constructor(public navCtrl: NavController, public items: Items, public modalCtrl: ModalController) {
    this.currentItems = this.items.query();
  }

  openItem(item: Item) {
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
  }
  showLiveMatches(){
    this.navCtrl.push('LiveMatchesPage')
  }
  openSettings(){
    this.navCtrl.push('SettingsPage')
  }
}
