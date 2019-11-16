import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';


import {KangooNetPage} from './kangoo-net.page';
import {RouterModule, Routes} from "@angular/router";
import {SharedModule} from "../../shared/shared.module";

const routes: Routes = [
    {
        path: '',
        component: KangooNetPage,
    },
];

@NgModule({
    imports: [
        SharedModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [KangooNetPage]
})
export class KangooNetPageModule {
}
