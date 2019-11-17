export interface ITag {
    type: TagType;
    name: string;
    allowDelete: boolean;
}

export type TagType = 'skill' | 'interest' | 'location';
