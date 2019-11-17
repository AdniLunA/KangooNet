import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {QrCodeModule} from 'ng-qrcode';
import {ZXingScannerModule} from '@zxing/ngx-scanner';
import {HeaderComponent} from './components/header/header.component';
import {IonicModule} from '@ionic/angular';
import {MapRolePipe} from './pipes/mapRole.pipe';
import {TagComponent} from './components/tag/tag.component';

const components = [HeaderComponent, TagComponent];

@NgModule({
  declarations: [...components, MapRolePipe],
  imports: [CommonModule, QrCodeModule, ZXingScannerModule, IonicModule],
  exports: [CommonModule, QrCodeModule, ZXingScannerModule, ...components, MapRolePipe],
})
export class SharedModule {
}
