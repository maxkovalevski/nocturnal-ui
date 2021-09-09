import React, { FC } from "react";

import { PostCardExcerpt, VARIANT } from "./components/PostCardExcerpt";
import { PostTags } from "../PostTags";
import { PostInfo } from "../PostInfo";

import { MAX_TAGS_COUNT } from "../../common/constants";

import { LinkView } from "../../typings/LinkView";

import * as styles from "./post-card.module.css";

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
  imgView?(post: Pick<PostCardProps, 'imgSrc' | 'title'>): React.ReactNode;
  linkView?: LinkView;
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
  linkView = ({ to, children, ...props }) => <a href={to} {...props}>{children}</a>
}) => {
  return (
    <article className={styles[view]}>
      {imgSrc && linkView?.({ to: link, className: styles.thumbnail, children: <>
          {imgSrc && !imgView && <img src={imgSrc} alt={title} />}
          {imgSrc && imgView && imgView({ imgSrc, title })}
      </>})}
      <div className={styles.content}>
        <header className={styles.header}>
          <PostTags tags={tags} maxCount={MAX_TAGS_COUNT.card} id={id} linkView={linkView} />
          {linkView?.({ to: link, children: title, className: styles.title })}
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
