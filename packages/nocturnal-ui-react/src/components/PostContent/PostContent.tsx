import React, { FC } from "react";

import { ContentCard } from "../ContentCard";
import { PostInfo } from "../PostInfo";
import { PostTags } from "../PostTags";

import * as styles from "./post-content.module.css";

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

export const PostContent: FC<PostContentProps> = ({
  title,
  date,
  tags,
  children,
  imgSrc,
  imgView,
}) => {
  return (
    <article>
      <ContentCard
        topView={
          imgSrc || imgView ? (
            <div className={styles.thumbnail}>
              {imgSrc && <img src={imgSrc} alt={title} />}
              {imgView && imgView}
            </div>
          ) : null
        }
      >
        <header>
          <h1>{title}</h1>
          <PostInfo date={date} />
          <PostTags tags={tags} />
          <hr />
        </header>
        <div>{children}</div>
      </ContentCard>
    </article>
  );
};
