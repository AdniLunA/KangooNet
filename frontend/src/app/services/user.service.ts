import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {IUser, RoleType} from '../interfaces/user';
import {ITag, TagType} from "../interfaces/tag";

@Injectable({
    providedIn: 'root',
})
export class UserService {
    localUser: IUser;
    private dummyUserRes = {
        "_id": "5dd011af4ca4823874e9fefb",
        "user": {
            "role": "candidate",
            "name": "Kangaroo",
            "avatar": "https://vignette.wikia.nocookie.net/daskaenguru/images/8/8d/Kangaroo-1149807.jpg/revision/latest/scale-to-width-down/670?cb=20190226174403&path-prefix=de",
            "linkList": [
                {
                    "name": "LinkedIn",
                    "url": "https://www.linkedin.com/company/heykangaroo/"
                }
            ],
            "jobList": [
                {
                    "name": "JS Developer",
                    "requirementsTags": [
                        "JS",
                        "Javascript"
                    ]
                },
                {
                    "name": "Sysadmin",
                    "requirementsTags": [
                        "Linux",
                        "Scripting",
                        "Windows",
                        "PS",
                        "Bash"
                    ]
                },
                {
                    "name": "test",
                    "requirementsTags": [
                        "test"
                    ]
                }
            ],
            "tagList": {
                "skillList": [
                    "JS",
                    "FE",
                    "BE",
                    "Sales"
                ],
                "interestList": [
                    "Kommunismus",
                    "Kommunikation"
                ],
                "locationList": [
                    "Heilbronn"
                ]
            },
            "contactList": [
                {
                    "name": "Härta",
                    "personalFeedback": "40%",
                    "isfavorite": "false",
                    "id": "5dd123d57c9973215841f30a"
                },
                {
                    "id": "5dd0164d4ca4823874e9fefd",
                    "name": "Koala",
                    "isfavorite": "true",
                    "personalfeedback": "70%"
                }
            ],
            "attendance": {
                "conference": {
                    "id": "5dd011114ca4823874e9fefa",
                    "name": "CodeCamp HN",
                    "logo": "https://www.codecamp-heilbronn.de/wp-content/uploads/2018/09/CC_Heilbronn_MainLogo_110x40.png",
                    "tagList": {
                        "location": "Heilbronn",
                        "skillList": [
                            "Google Cloud",
                            "MongoDB",
                            "JS"
                        ]
                    },
                    "expirationDate": "18.11.2019"
                }
            },
            "upcomingConferenceList": [],
            "conferenceHistory": []
        }
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

    constructor(private apiService: ApiService) {
        this.localUser = this.transformUser(this.dummyUserRes)
    }

    convertToTag(item: string, type: TagType): ITag {
        return {
            name: item,
            type,
            allowDelete: true,
        };
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
                requirementsTag: job.requirementsTags.map(item => this.convertToTag(item, 'skill')),
                showAdd: false
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
}
