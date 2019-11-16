import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {QrCodeModule} from 'ng-qrcode';
import {ZXingScannerModule} from '@zxing/ngx-scanner';

@NgModule({
  declarations: [],
    imports: [CommonModule, QrCodeModule, ZXingScannerModule],
    exports: [CommonModule, QrCodeModule, ZXingScannerModule],
})
export class SharedModule {}
