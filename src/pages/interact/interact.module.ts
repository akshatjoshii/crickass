import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { InteractPage } from './interact';
import {RatingModule} from "ng2-rating";

@NgModule({
  declarations: [
    InteractPage,
  ],
  imports: [
    IonicPageModule.forChild(InteractPage),
    RatingModule
  ],
})
export class InteractPageModule {}
