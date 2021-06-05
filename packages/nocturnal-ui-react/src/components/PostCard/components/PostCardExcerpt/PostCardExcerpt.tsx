import React from "react";

import * as styles from "./post-card-excerpt.module.css";

export const VARIANT = {
  first: "first",
  second: "second",
} as const;

interface PostCardExcerptProps {
  children: string;
  variant?: typeof VARIANT.first | typeof VARIANT.second;
}

export const PostCardExcerpt = ({
  children,
  variant = VARIANT.first,
}: PostCardExcerptProps) => {
  return (
    <div className={styles[variant]}>
      <p>{children}</p>
    </div>
  );
};

export default PostCardExcerpt;
