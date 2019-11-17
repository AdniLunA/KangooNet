import {Component, Input, OnInit} from '@angular/core';
import {ITag} from '../../../interfaces/tag';

@Component({
    selector: 'app-tag',
    templateUrl: './tag.component.html',
    styleUrls: ['./tag.component.scss'],
})
export class TagComponent implements OnInit {
    @Input('tag') tag: ITag;

    constructor() {
    }

    ngOnInit() {
    }

    getIcon() {
        return this.tag.type === 'interest' ? 'heart' : this.tag.type === 'location' ? 'pin' : 'school';
    }
}
