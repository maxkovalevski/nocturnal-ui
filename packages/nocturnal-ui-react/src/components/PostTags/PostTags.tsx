import React, { FC } from "react";

import { PostTag } from "../PostTag";

import * as styles from "./post-tags.module.css";

export interface PostTagsProps {
  tags: {
    name: string;
    link?: string;
  }[];
  direction?: "row" | "column";
  maxCount?: number;
  id?: string;
}

export const PostTags: FC<PostTagsProps> = ({
  tags,
  id = "",
  direction = "row",
  maxCount = tags.length,
}) => {
  if (!tags.length) {
    return null;
  }

  const displayedTags = tags
    .map((tag) => ({
      ...tag,
      name: tag.name.toLowerCase(),
    }))
    .slice(0, maxCount);

  return (
    <div className={styles[direction]}>
      {displayedTags.map((tag) => (
        <div className={styles.tag} key={`${id}-${tag}`}>
          <PostTag link={tag.link}>{tag.name}</PostTag>
        </div>
      ))}
    </div>
  );
};
