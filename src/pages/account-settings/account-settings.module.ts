import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AccountSettingsPage } from './account-settings';
import {RatingModule} from "ng2-rating";

@NgModule({
  declarations: [
    AccountSettingsPage,
  ],
  imports: [
    IonicPageModule.forChild(AccountSettingsPage),
    RatingModule
  ],
})
export class AccountSettingsPageModule {}
