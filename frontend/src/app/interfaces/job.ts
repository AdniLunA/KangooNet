import {ITag} from "./tag";

export interface IJob {
    name: string;
    requirementsTags: ITag[];
    showAdd: boolean;
}
