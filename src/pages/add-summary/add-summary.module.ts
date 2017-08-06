import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddSummaryPage } from './add-summary';

@NgModule({
  declarations: [
    AddSummaryPage,
  ],
  imports: [
    IonicPageModule.forChild(AddSummaryPage),
  ],
})
export class AddSummaryPageModule {}
