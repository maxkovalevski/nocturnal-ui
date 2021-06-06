import React, { FC } from "react";
export interface Post {
    id?: string;
    title: string;
    date: string | null;
    excerpt: string;
    tags: {
        name: string;
        link: string;
    }[];
    link: string;
    imgSrc?: string;
}
interface PostsListProps {
    posts: Post[];
    gridView?: "row" | "tile";
    imgRender?(post: Post): React.ReactNode;
}
export declare const PostsList: FC<PostsListProps>;
export {};
