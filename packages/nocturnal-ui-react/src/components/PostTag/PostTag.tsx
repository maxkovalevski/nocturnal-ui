import React, { FC } from "react";
import { Link } from "@reach/router";

import * as styles from "./post-tag.module.css";

interface PostTagProps {
  link?: string;
}

export const PostTag: FC<PostTagProps> = ({ link, children }) => {
  return (
    <>
      {link ? (
        <Link to={link} className={styles.tag}>
          #{children}
        </Link>
      ) : (
        <span className={styles.tag}>#{children}</span>
      )}
    </>
  );
};
