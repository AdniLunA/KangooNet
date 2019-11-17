import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {RegisterPage} from './register.page';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';

const routes: Routes = [
    {
        path: '',
        component: RegisterPage,
    },
];

@NgModule({
    imports: [SharedModule, FormsModule, IonicModule, RouterModule.forChild(routes)],
    declarations: [RegisterPage],
})
export class RegisterPageModule {
}
