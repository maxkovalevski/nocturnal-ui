import React, { FC } from "react";
import { LinkView } from "../../typings/LinkView";
export interface PostCardProps {
    id?: string;
    view?: "row" | "tile";
    title: string;
    date: string | null;
    excerpt: string;
    tags: {
        name: string;
        link: string;
    }[];
    link: string;
    imgSrc?: string;
    imgView?: React.ReactNode;
    linkView?: LinkView;
}
export declare const PostCard: FC<PostCardProps>;
