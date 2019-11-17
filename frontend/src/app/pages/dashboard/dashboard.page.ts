import {Component} from '@angular/core';

@Component({
    selector: 'app-dashboard',
    templateUrl: 'dashboard.page.html',
    styleUrls: ['dashboard.page.scss'],
})
export class DashboardPage {
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
