import { FC } from "react";
import { LinkView } from "../../typings/LinkView";
export interface TagData {
    name: string;
    count: number;
    link: string;
}
export interface TagsPileProps {
    tags: TagData[];
    linkView?: LinkView;
}
export declare const TagsPile: FC<TagsPileProps>;
