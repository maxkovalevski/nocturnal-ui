import { FC } from "react";
import { LinkView } from "../../typings/LinkView";
export interface PostTagsProps {
    tags: {
        name: string;
        link?: string;
    }[];
    direction?: "row" | "column";
    maxCount?: number;
    id?: string;
    linkView?: LinkView;
}
export declare const PostTags: FC<PostTagsProps>;
