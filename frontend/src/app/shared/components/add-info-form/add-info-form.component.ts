import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-add-info-form',
    templateUrl: './add-info-form.component.html',
    styleUrls: ['./add-info-form.component.scss'],
})
export class AddInfoFormComponent implements OnInit {
    @Input('label') label: string;

    constructor() {
    }

    ngOnInit() {
    }
}
