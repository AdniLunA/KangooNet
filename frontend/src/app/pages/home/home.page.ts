import {Component} from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    favouritesList = [
        {name: 'KängooCalls', role: 'company'},
        {name: 'Hase', role: 'candidate'},
    ];
    contactsList = [
        {name: 'Herta', role: 'company'},
        {name: 'Mark', role: 'company'},
        {name: 'Uwe', role: 'candidate'},
    ];
    test = {};

    constructor(private userService: UserService) {
    }

    async ionViewDidEnter() {
        this.test = await this.userService.getUser('5dd011af4ca4823874e9fefb');
        console.log('fetched user', this.test);
    }
}
