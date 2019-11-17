import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-match',
    templateUrl: './match.page.html',
    styleUrls: ['./match.page.scss'],
})
export class MatchPage implements OnInit {

    scanSuccess: boolean;
    scannedId: string;

    constructor() {
    }

    scanSuccessHandler(result: string) {
        this.scanSuccess = true;
        this.scannedId = result;
    }

    ngOnInit() {
        this.scanSuccess = false;
    }

    retry() {
        this.scanSuccess = false;
    }

}
