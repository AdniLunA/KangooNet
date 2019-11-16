import {Component} from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
    scanSuccess: boolean;
    scannedId: string;

  constructor() {}

    scanSuccessHandler(event: Event) {
        console.log(event);
        this.scanSuccess = true;
        this.scannedId = event.toString();
    }

    ionicViewDidEnter() {
        this.scanSuccess = false;
    }
}
