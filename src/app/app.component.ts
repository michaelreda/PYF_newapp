import { YourFishPage } from './../pages/your-fish/your-fish';
import { PyfMembersPage } from './../pages/pyf-members/pyf-members';
import { AddEventPage } from './../pages/add-event/add-event';
import { AddSummaryPage } from './../pages/add-summary/add-summary';
import { EventsPage } from './../pages/events/events';
import { WeeklySummaryPage } from './../pages/weekly-summary/weekly-summary';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { JoinOurFamilyPage } from "../pages/join-our-family/join-our-family";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = JoinOurFamilyPage;

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation and menu
    this.pages = [
      { title: 'On Wings summary', component: WeeklySummaryPage },
      { title: 'Events', component: EventsPage },
      { title: 'Add Summary', component: AddSummaryPage },
      { title: 'Add Event', component: AddEventPage },
      { title: 'PYF Members', component: PyfMembersPage },
      { title: 'Your Fish', component: YourFishPage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
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
