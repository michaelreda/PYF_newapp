import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PyfMembersPage } from './pyf-members';

@NgModule({
  declarations: [
    PyfMembersPage,
  ],
  imports: [
    IonicPageModule.forChild(PyfMembersPage),
  ],
})
export class PyfMembersPageModule {}
