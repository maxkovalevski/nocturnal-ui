import { FC } from "react";
interface PostTagsProps {
    tags: {
        name: string;
        link?: string;
    }[];
    direction?: "row" | "column";
    maxCount?: number;
    id?: string;
}
export declare const PostTags: FC<PostTagsProps>;
export {};
