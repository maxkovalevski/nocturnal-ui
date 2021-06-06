import React, { FC } from "react";
interface PostCardProps {
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
}
export declare const PostCard: FC<PostCardProps>;
export {};
