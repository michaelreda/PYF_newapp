import { EditMemberPage } from './../edit-member/edit-member';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {AngularFireDatabase,FirebaseListObservable } from 'angularfire2/database';
import { user } from './../../models/user.interface';

/**
 * Generated class for the PyfMembersPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pyf-members',
  templateUrl: 'pyf-members.html',
})
export class PyfMembersPage {
  users:user[];
  user$: FirebaseListObservable<user[]>;
  constructor(public navCtrl: NavController, public navParams: NavParams, db:AngularFireDatabase) {
    this.user$= db.list('users');
    this.user$.subscribe( users => {
      this.users=users;
      console.log(this.users[0].$key);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PyfMembersPage');
  }

  edit_member(){
    this.navCtrl.push(EditMemberPage);
  }
}
