import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {UserPage} from './user.page';
import {SharedModule} from '../../shared/shared.module';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: UserPage,
    },
];

@NgModule({
    imports: [CommonModule, SharedModule, FormsModule, IonicModule, RouterModule.forChild(routes)],
    declarations: [UserPage],
})
export class UserPageModule {
}
