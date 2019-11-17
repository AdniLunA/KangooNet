import {Component} from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage {
    favouritesList = [
        {name: 'Pinguin', role: 'company'},
        {name: 'Koala', role: 'candidate'}]
    contactsList = [
        {name: 'Herta', role: 'company'},
        {name: 'Mark', role: 'company'},
        {name: 'Uwe', role: 'candidate'}
    ]
  constructor() {}

  ionViewDidEnter() {}
}
