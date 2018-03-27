import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the InteractPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-interact',
  templateUrl: 'interact.html',
})
export class InteractPage {
  interacts = [
    {
      head: 'BOUNCER',
      trophy: [1, 1, 1],
      description: 'Trivia on cricket and your favorite stars',
      stats: [{name:"COMPLETED", value:5}, {name:"REMAINING",value:2}, {name:"HP EARNED", value:5234}, {name:"CURRENT RANK",value:203}]
    },
    {
      head: 'HAND CRICKET',
      trophy: [1, 0, 0],
      description: 'Play the classic hand cricket with a random opponent online',
      stats: [{name:"COMPLETED", value:23},{name:"WON", value:1},{name:"LOST", value:22},{name:"HP EARNED", value:142},{name:"CURRENT RANK", value:1201}]
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InteractPage');
  }

}
