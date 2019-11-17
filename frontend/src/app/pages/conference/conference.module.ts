import {IonicModule} from '@ionic/angular';
import {RouterModule} from '@angular/router';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ConferencePage} from './conference.page';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    IonicModule,
    SharedModule,
    FormsModule,
    RouterModule.forChild([{path: '', component: ConferencePage}]),
  ],
  declarations: [ConferencePage],
})
export class ConferencePageModule {
}
