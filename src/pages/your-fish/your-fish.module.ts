import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { YourFishPage } from './your-fish';

@NgModule({
  declarations: [
    YourFishPage,
  ],
  imports: [
    IonicPageModule.forChild(YourFishPage),
  ],
})
export class YourFishPageModule {}
