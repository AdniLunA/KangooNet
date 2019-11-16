import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {QrCodeModule} from 'ng-qrcode';
import {ZXingScannerModule} from '@zxing/ngx-scanner';
import {HeaderComponent} from "./header/header.component";
import {IonicModule} from "@ionic/angular";

const components = [
    HeaderComponent
];

@NgModule({
    declarations: [...components],
    imports: [CommonModule, QrCodeModule, ZXingScannerModule, IonicModule],
    exports: [CommonModule, QrCodeModule, ZXingScannerModule, ...components],
})
export class SharedModule {
}
