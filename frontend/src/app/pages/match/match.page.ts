import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-match',
    templateUrl: './match.page.html',
    styleUrls: ['./match.page.scss'],
})
export class MatchPage implements OnInit {

    scanSuccess: boolean;
    scannedRole: string;
    scannedId: string;

    userMatch = {
        name: 'Koala',
        skillList: ['skill1', 'skill2'],
        interestList: ['interest1', 'interest2'],
        locationList: ['location1', 'location2'],
    };
    companyMatch = {
        name: 'KängooN@',
        matching: 70,
        jobList: [{
            'name': 'job1',
            'matching': 90
        }, {
            'name': 'job2',
            'matching': 30
        }]
    };

    constructor() {
    }

    scanSuccessHandler(result: string) {
        this.scanSuccess = true;
        const splitted = result.split(':');
        this.scannedRole = splitted[0];
        this.scannedId = splitted[1];
    }

    ngOnInit() {
        this.scanSuccess = true; // @todo
    }

    retry() {
        this.scanSuccess = false;
    }

}
