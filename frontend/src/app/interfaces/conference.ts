import {ITag} from "./tag";

export interface IConference {
    "id": string,
    "name": string,
    "logo": string,
    "tagList": {
        "location": ITag,
        "skillList": ITag[]
    },
    "expirationDate": Date
}
