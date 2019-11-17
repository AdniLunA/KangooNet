import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {QrCodeModule} from 'ng-qrcode';
import {ZXingScannerModule} from '@zxing/ngx-scanner';
import {HeaderComponent} from './components/header/header.component';
import {IonicModule} from '@ionic/angular';
import {MapRolePipe} from './pipes/mapRole.pipe';
import {TagComponent} from './components/tag/tag.component';
import {AddInfoFormComponent} from './components/add-info-form/add-info-form.component';

const components = [HeaderComponent, TagComponent, AddInfoFormComponent];

@NgModule({
  declarations: [...components, MapRolePipe],
  imports: [CommonModule, QrCodeModule, ZXingScannerModule, IonicModule],
  exports: [CommonModule, QrCodeModule, ZXingScannerModule, ...components, MapRolePipe],
})
export class SharedModule {
}
