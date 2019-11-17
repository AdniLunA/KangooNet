import {Component, OnInit} from '@angular/core';
import {ITag, TagType} from '../../interfaces/tag';
import {UserService} from "../../services/user.service";
import {IUser} from "../../interfaces/user";
import {IContact} from "../../interfaces/contact";
import {NavController} from "@ionic/angular";

@Component({
    selector: 'app-match',
    templateUrl: './match.page.html',
    styleUrls: ['./match.page.scss'],
})
export class MatchPage implements OnInit {
    scanSuccess: boolean;
    scannedRole: string;
    scannedId: string;
    user: IUser = null;

    userMatch = {
        name: 'Koala',
        skillList: ['skill1', 'skill2'].map(item => this.convertToTag(item, 'skill')),
        interestList: ['interest1', 'interest2'].map(item => this.convertToTag(item, 'interest')),
        locationList: ['location1', 'location2'].map(item => this.convertToTag(item, 'location')),
    };
    companyMatch = {
        name: 'KängooN@',
        matching: 70,
        jobList: [
            {
                name: 'job1',
                matching: 90,
            },
            {
                name: 'job2',
                matching: 30,
            },
        ],
    };

    constructor(public userService: UserService, public navCtrl: NavController) {
        this.user = userService.localUser;
        console.log(this.user);
    }

    scanSuccessHandler(result: string) {
        this.scanSuccess = true;
        const splitted = result.split(':');
        this.scannedRole = splitted[0];
        this.scannedId = splitted[1];
    }

    ngOnInit() {
        this.scanSuccess = false;
    }

    retry() {
        this.scanSuccess = false;
    }

    convertToTag(item: string, type: TagType): ITag {
        return {
            name: item,
            type,
            allowDelete: true,
        };
    }

    addContact() {
        const newContact: IContact = this.scannedRole === 'company'
            ? {
                id: '1',
                name: 'KängooN@',
                role: 'company',
                isFavourite: false
            }
            : {
                id: '2',
                name: 'Koala',
                role: 'candidate',
                isFavourite: false
            };
        this.user.contactList.push(
            newContact
        );
        this.navCtrl.navigateBack('tabs/home');
    }
}
