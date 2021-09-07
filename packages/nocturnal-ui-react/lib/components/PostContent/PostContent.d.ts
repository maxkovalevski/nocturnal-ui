import React, { FC } from "react";
export interface PostContentProps {
    title: string;
    date: string;
    tags: {
        name: string;
        link?: string;
    }[];
    imgSrc?: string;
    imgView?: React.ReactNode;
}
export declare const PostContent: FC<PostContentProps>;
