import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './tab3.page';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  imports: [
    IonicModule,
    SharedModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: Tab3Page }]),
  ],
  declarations: [Tab3Page],
})
export class Tab3PageModule {}
