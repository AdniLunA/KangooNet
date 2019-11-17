import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-user',
    templateUrl: './user.page.html',
    styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
    user = {
        name: 'Känguru',
        role: 'candidate',
        jobList: ['job1', 'job2'],
        skillList: ['skill1', 'skill2'],
        interestList: ['interest1', 'interest2'],
        locationList: ['location1', 'location2'],
        linkList: ['link1', 'link2'],
    };

    constructor() {
    }

    ngOnInit() {
    }

}
