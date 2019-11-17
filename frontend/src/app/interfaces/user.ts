import {ILink} from './link';
import {IJob} from './job';
import {ITag} from './tag';
import {IContact} from './contact';
import {IConference} from './conference';

export interface IUser {
    id: string;
    role: RoleType;
    name: string;
    avatar: string;
    linkList: ILink[];
    jobList: IJob[];
    tagList: {
        skillList: ITag[];
        interestList: ITag[];
        locationList: ITag[];
    };
    contactList: IContact[];
    attendance: {
        conference: IConference;
    };
    upcomingConferenceList: IConference[];
    conferenceHistory: IConference[];
}

export type RoleType = 'candidate' | 'company';
