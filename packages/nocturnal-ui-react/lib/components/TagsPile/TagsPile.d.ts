import { FC } from "react";
interface TagData {
    name: string;
    count: number;
    linkPrefix: string;
}
interface TagsPile {
    tags: TagData[];
}
export declare const TagsPile: FC<TagsPile>;
export {};
