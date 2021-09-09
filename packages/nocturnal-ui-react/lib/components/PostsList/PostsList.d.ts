import React, { FC } from "react";
import { LinkView } from "../../typings/LinkView";
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
export interface PostsListProps {
    posts: Post[];
    gridView?: "row" | "tile";
    imgView?(post: Pick<Post, 'imgSrc' | 'title'>): React.ReactNode;
    linkView?: LinkView;
}
export declare const PostsList: FC<PostsListProps>;
