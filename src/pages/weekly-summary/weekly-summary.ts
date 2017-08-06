import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

/**
 * Generated class for the WeeklySummaryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-weekly-summary',
  templateUrl: 'weekly-summary.html',
})
export class WeeklySummaryPage {
  menu;
  constructor(public navCtrl: NavController, public navParams: NavParams, menu :  MenuController) {
    this.menu = menu;
    this.menu.enable(true, 'app_menu');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WeeklySummaryPage');
  }

}
