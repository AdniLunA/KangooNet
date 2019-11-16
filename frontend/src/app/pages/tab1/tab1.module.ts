import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Tab1Page} from './tab1.page';
import {SharedModule} from "../../shared/shared.module";

@NgModule({
  imports: [
    IonicModule,
      SharedModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab1Page }]),
  ],
  declarations: [Tab1Page],
})
export class Tab1PageModule {}
