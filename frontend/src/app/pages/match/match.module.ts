import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {MatchPage} from './match.page';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';

const routes: Routes = [
    {
        path: '',
        component: MatchPage,
    },
];

@NgModule({
    imports: [SharedModule, FormsModule, IonicModule, RouterModule.forChild(routes)],
    declarations: [MatchPage],
})
export class MatchPageModule {
}
