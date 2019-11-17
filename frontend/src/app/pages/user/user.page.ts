import {Component, OnInit} from '@angular/core';
import {ITag, TagType} from '../../interfaces/tag';
import {UserService} from "../../services/user.service";
import {IUser} from "../../interfaces/user";

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {
  user: IUser = null;
  show = {
    jobAdd: false,
    skillAdd: false,
    interestAdd: false,
    locationAdd: false,
    linkAdd: false
  };

  constructor(public userService: UserService) {
    this.user = userService.localUser;
    console.log(this.user);
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

  toggleAttribute(obj: any, attr: string) {
    obj[attr] != obj[attr];
  }
}
