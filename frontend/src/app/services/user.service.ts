import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {IUser, RoleType} from '../interfaces/user';
import {ITag, TagType} from "../interfaces/tag";

@Injectable({
    providedIn: 'root',
})
export class UserService {
    constructor(private apiService: ApiService) {
    }

    getUserList() {
        return this.apiService.get('/user');
    }

    getUser(id: string) {
        //return user from api
        const user = this.apiService.get('/user/' + id);
        console.log('getUser', user);
        return user ? this.transformUser(user) : user;
    }

    getUserByName(name: string) {
        return this.apiService.get('/login/' + name);
    }

    getAvatarList() {
        return this.apiService.get('/getAvatar');
    }

    createUser(name: string, avatar: string, role: string) {
        //return user from api
        return this.apiService.post('/create', {
            name,
            avatar,
            role,
        });
    }

    addContact(idContact: string, idUser: string) {
        return this.apiService.put('/user/add/' + idContact + '/asFirendTo/' + idUser, null);
    }

    addJob(id: string, req: string[], name: string) {
        return this.apiService.put('/addJob/' + id, {
            name,
            req,
        });
    }

    transformUser(response: any): IUser {
        const userRes = response.user;
        return {
            id: response._id,
            role: userRes.role as RoleType,
            name: userRes.name,
            avatar: userRes.avatar,
            linkList: userRes.linkList,
            jobList: userRes.jobList.map(job => ({
                name: job.name,
                requirementsTag: job.requirementsTags.map(item => this.convertToTag(item, 'skill'))
            })),
            tagList: {
                skillList: userRes.tagList.skillList.map(item => this.convertToTag(item, 'skill')),
                interestList: userRes.tagList.interestList.map(item => this.convertToTag(item, 'interest')),
                locationList: userRes.tagList.locationList.map(item => this.convertToTag(item, 'location')),
            },
            contactList: userRes.contactList,
            attendance: {
                conference: {
                    id: userRes.attendance.conference.id,
                    name: userRes.attendance.conference.name,
                    logo: userRes.attendance.conference.logo,
                    tagList: {
                        location: this.convertToTag(userRes.attendance.conference.tagList.location, 'location'),
                        skillList: userRes.attendance.conference.tagList.skillList.map(item => this.convertToTag(item, 'skill'))
                    },
                    expirationDate: new Date(userRes.attendance.conference.expirationDate),
                },
            },
            upcomingConferenceList: [],
            conferenceHistory: [],
        }
    }

    convertToTag(item: string, type: TagType): ITag {
        return {
            name: item,
            type,
            allowDelete: true,
        };
    }
}
