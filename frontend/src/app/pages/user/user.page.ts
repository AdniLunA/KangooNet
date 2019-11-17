import {Component, OnInit} from '@angular/core';
import {ITag, TagType} from '../../interfaces/tag';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  user = {
    name: 'Känguru',
    url:
        'https://vignette.wikia.nocookie.net/daskaenguru/images/8/8d/Kangaroo-1149807.jpg/revision/latest/scale-to-width-down/670?cb=20190226174403&path-prefix=de',
    role: 'candidate',
    jobList: ['job1', 'job2'],
    skillList: ['skill1', 'skill2'].map(item => this.convertToTag(item, 'skill')),
    interestList: ['interest1', 'interest2'].map(item => this.convertToTag(item, 'interest')),
    locationList: ['location1', 'location2'].map(item => this.convertToTag(item, 'location')),
    linkList: ['link1', 'link2link2link2link2link2link2link2link2link2link2link2link2link2link2'],
  };

  constructor() {
  }

  ngOnInit() {
  }

  convertToTag(item: string, type: TagType): ITag {
    return {
      name: item,
      type,
      allowDelete: true,
    };
  }
}
