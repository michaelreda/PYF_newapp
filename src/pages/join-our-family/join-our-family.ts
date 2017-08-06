
import { WeeklySummaryPage } from './../weekly-summary/weekly-summary';

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, IonicApp, MenuController } from 'ionic-angular';
import {Http} from '@angular/http';
import {AngularFireDatabase,FirebaseListObservable } from 'angularfire2/database';
import { user } from './../../models/user.interface';

/**
 * Generated class for the JoinOurFamilyPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-join-our-family',
  templateUrl: 'join-our-family.html',
})
export class JoinOurFamilyPage {
  user= {} as user;
  menu;

  user$: FirebaseListObservable<user[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams,public http:Http,menu :  MenuController, private db:AngularFireDatabase) {
    this.menu = menu;
    this.menu.enable(false, 'app_menu');

    this.user$=this.db.list('users');
    console.log(this.user$);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad JoinOurFamilyPage');
  }

  join(user:user) {

    this.user$.push(user);
    this.navCtrl.setRoot(WeeklySummaryPage);
    // console.log(user);


    // this.http.post("https://pyf-michaelreda96.rhcloud.com/js/insert.php", { 'first_name': this.first_name, 'last_name': this.last_name, 'age': this.age, 'homeCity': this.home_city, 'mobile': this.mobile, 'church': this.church, 'faculty': this.faculty, 'dash': this.class })
    //   .subscribe(function (data) {
    //     var res = JSON.parse(data['_body']);
    //     console.log(res);
        
    //   });
  }

}
