import {Component} from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    favouritesList = [
        {name: 'Pinguin', role: 'company'},
        {name: 'Koala', role: 'candidate'},
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
        this.test = await this.userService.getUserByName('Kangaroo');
        console.log('asdjfadsjf', this.test);
    }
}
