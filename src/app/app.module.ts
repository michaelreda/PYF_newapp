
import { YourFishPage } from './../pages/your-fish/your-fish';
import { EditMemberPage } from './../pages/edit-member/edit-member';
import { PyfMembersPage } from './../pages/pyf-members/pyf-members';
import { AddEventPage } from './../pages/add-event/add-event';
import { AddSummaryPage } from './../pages/add-summary/add-summary';
import { EventsPage } from './../pages/events/events';
import { WeeklySummaryPage } from './../pages/weekly-summary/weekly-summary';

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule} from '@angular/http';
import {AngularFireModule} from 'angularfire2';
import { FIREBASE_CRENDENTIALS } from './firebase.credentials';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { JoinOurFamilyPage } from "../pages/join-our-family/join-our-family";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    JoinOurFamilyPage,
    WeeklySummaryPage,
    EventsPage,
    AddSummaryPage,
    AddEventPage,
    PyfMembersPage,
    EditMemberPage,
    YourFishPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    AngularFireModule.initializeApp(FIREBASE_CRENDENTIALS),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    JoinOurFamilyPage,
    WeeklySummaryPage,
    EventsPage,
    AddSummaryPage,
    AddEventPage,
    PyfMembersPage,
    EditMemberPage,
    YourFishPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
