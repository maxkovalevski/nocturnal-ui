import React, { CSSProperties, FC } from "react";

import * as styles from "./posts-section.module.css";

interface PostsSectionProps {
  style?: CSSProperties;
}

export const PostsSection: FC<PostsSectionProps> = ({ children, style }) => {
  return (
    <section className={styles.section} style={style}>
      {children}
    </section>
  );
};
