import {Component} from '@angular/core';
import {UserService} from '../../services/user.service';
import {IUser} from "../../interfaces/user";

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    user: IUser = null;
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
        this.user = userService.localUser;
        console.log(this.user);
    }

    async ionViewDidEnter() {
        this.test = await this.userService.getUser('5dd011af4ca4823874e9fefb');
        console.log('fetched user', this.test);
    }

    getContact(isFavourite = false) {
        return this.user.contactList.filter(item => item.isFavourite === isFavourite);
    }
}
