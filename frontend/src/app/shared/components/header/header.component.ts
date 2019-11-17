import {Component, Input, OnInit} from '@angular/core';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    @Input('title') title: string;
    @Input('isLoggedIn') isLoggedIn = true;

    constructor(private navCtrl: NavController) {
    }

    ngOnInit() {
    }

    back() {
        this.navCtrl.back();
    }

    openPage(pageName: string) {
        this.navCtrl.navigateForward(pageName);
    }
}
