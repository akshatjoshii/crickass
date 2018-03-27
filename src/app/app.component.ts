import { Component, ViewChild } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Config, Nav, Platform } from 'ionic-angular';
import { FirstRunPage } from '../pages/pages';
import { Settings } from '../providers/providers';

@Component({
  template: `<ion-menu [content]="content" type="overlay">
    <ion-header>
      <ion-navbar color="primary">
        <ion-title>LOGO</ion-title>
      </ion-navbar>
    </ion-header>

    <ion-content class="menu-bk-color">
      <div >
      <ion-list no-lines>
        <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">
          {{p.title}}
        </button>
      </ion-list>
      </div>
    </ion-content>
  </ion-menu>
  <ion-nav #content [root]="rootPage"v></ion-nav>`
})

export class MyApp {
  rootPage = FirstRunPage;

  @ViewChild(Nav) nav: Nav;

  pages: any[] = [
    { title: 'link 1', component: 'TutorialPage' },
    { title: 'link 2', component: 'WelcomePage' },
    { title: 'link 3', component: 'TabsPage' },
    { title: 'link 4', component: 'CardsPage' },
    { title: 'link 5', component: 'ContentPage' },
    { title: 'link 6', component: 'LoginPage' },
    { title: 'link 7', component: 'SignupPage' },
    { title: 'link 8', component: 'ListMasterPage' },
    { title: 'link 9', component: 'MenuPage' },
    { title: 'link 10', component: 'SettingsPage' },
    { title: 'link 11', component: 'SearchPage' }
  ]

  constructor(platform: Platform, settings: Settings, private config: Config, private statusBar: StatusBar, private splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

  }



  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
