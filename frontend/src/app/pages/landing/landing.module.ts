import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {LandingPageRoutingModule} from './landing-routing.module';

import {LandingPage} from './landing.page';
import {SharedModule} from "../../shared/shared.module";

@NgModule({
    imports: [
        SharedModule,
        FormsModule,
        IonicModule,
        LandingPageRoutingModule
    ],
    declarations: [LandingPage]
})
export class LandingPageModule {
}
