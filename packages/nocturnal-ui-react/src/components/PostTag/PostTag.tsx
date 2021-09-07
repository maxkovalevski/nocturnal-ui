import React, { FC } from "react";

import { LinkView } from "../../typings/LinkView";

import * as styles from "./post-tag.module.css";

export interface PostTagProps {
  link?: string;
  linkView?: LinkView;
}

export const PostTag: FC<PostTagProps> = ({ link, children, linkView = ({ to, children, ...props }) => <a href={to} {...props}>{children}</a> }) => {
  return (
    <>
      {link ? (
        linkView?.({ to: link, children: `#${children}`, className: styles.tag })
      ) : (
        <span className={styles.tag}>#{children}</span>
      )}
    </>
  );
};
