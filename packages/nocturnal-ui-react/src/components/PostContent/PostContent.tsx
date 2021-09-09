import React, { FC } from "react";

import { ContentCard } from "../ContentCard";
import { PostContentImage } from "../PostContentImage";
import { PostInfo } from "../PostInfo";
import { PostTags } from "../PostTags";

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
          <PostContentImage imgSrc={imgSrc} imgView={imgView} altText={title} />
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
