import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {LandingPage} from './landing.page';
import {SharedModule} from '../../shared/shared.module';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: LandingPage,
    },
];

@NgModule({
    imports: [SharedModule, FormsModule, IonicModule, RouterModule.forChild(routes)],
    declarations: [LandingPage],
})
export class LandingPageModule {
}
