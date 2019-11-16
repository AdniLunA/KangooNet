import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QrCodeModule } from 'ng-qrcode';

@NgModule({
  declarations: [],
  imports: [CommonModule, QrCodeModule],
  exports: [CommonModule, QrCodeModule],
})
export class SharedModule {}
