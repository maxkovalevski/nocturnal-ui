import React, { FC } from "react";
import { Link } from "@reach/router";

import { PostCardExcerpt, VARIANT } from "./components/PostCardExcerpt";
import { PostTags } from "../PostTags";
import { PostInfo } from "../PostInfo";

import { MAX_TAGS_COUNT } from "../../constants";

import * as styles from "./post-card.module.css";

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

export const PostCard: FC<PostCardProps> = ({
  id,
  title,
  excerpt,
  date,
  tags,
  link,
  view = "tile",
  imgSrc,
  imgView,
}) => {
  return (
    <article className={styles[view]}>
      {imgSrc ||
        (imgView && (
          <Link className={styles.thumbnail} to={link}>
            {imgSrc && <img src={imgSrc} alt={title} />}
            {imgView && imgView}
          </Link>
        ))}
      <div className={styles.content}>
        <header className={styles.header}>
          <PostTags tags={tags} maxCount={MAX_TAGS_COUNT.card} id={id} />
          <Link to={link} className={styles.title} title={title}>
            {title}
          </Link>
        </header>
        <section>
          <PostCardExcerpt
            variant={view === "row" ? VARIANT.second : VARIANT.first}
          >
            {excerpt}
          </PostCardExcerpt>
        </section>
        <footer>
          <PostInfo date={date} />
        </footer>
      </div>
    </article>
  );
};
