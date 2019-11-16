import {Component, Input, OnInit} from '@angular/core';
import {NavController} from "@ionic/angular";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    @Input('title') title: string;
    @Input('showUser') showUser = true;

    constructor(private navCtrl: NavController) {
    }

    ngOnInit() {
    }

    back() {
        this.navCtrl.back();
    }

    openUser() {
        this.navCtrl.navigateForward('user');
    }

}
