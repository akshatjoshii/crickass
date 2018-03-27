import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SettingsPage } from './settings';
import {TranslateModule} from "@ngx-translate/core";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    SettingsPage,
  ],
  imports: [
    IonicPageModule.forChild(SettingsPage),
    TranslateModule.forChild(),
    FormsModule
  ],
  exports: [
    SettingsPage
  ]
})
export class SettingsPageModule { }
