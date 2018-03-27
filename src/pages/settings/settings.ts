import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  private todo : FormGroup;
  settingsReady=true;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public formBuilder: FormBuilder) {

    this.todo = this.formBuilder.group({
      option1: ['false'], option2: ['false'], option3: ['false'], option4: ['false'],
      option5: ['false'], option6: ['false'], option7: ['false'], option8: ['false']
    });

  }

  openAboutUs(){
    this.navCtrl.push('AboutUsPage');
  }
  openFaq(){
    this.navCtrl.push('FaqPage')
  }
  openAccountSettings(){
    this.navCtrl.push('AccountSettingsPage')
  }
  saveSettings(){
    this.navCtrl.push('ListMasterPage')
  }
  ionViewWillLeave() {
  }



}
