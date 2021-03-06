import React, { FC } from "react";

import { LinkView } from "../../typings/LinkView";

import { PostCard } from "../PostCard";

import * as styles from "./posts-list.module.css";

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

export const PostsList: FC<PostsListProps> = ({
  posts,
  gridView = "row",
  imgView,
  linkView
}) => {
  return (
    <div className={styles.list}>
      {posts.map((post, index) => (
        <PostCard
          key={post.id || index}
          {...post}
          view={gridView}
          imgView={imgView}
          linkView={linkView}
        />
      ))}
    </div>
  );
};
