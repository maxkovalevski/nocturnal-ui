import React, { FC } from "react";
import { Link } from "@reach/router";

import * as styles from "./tags-pile.module.css";

interface TagData {
  name: string;
  count: number;
  linkPrefix: string;
}

interface TagsPile {
  tags: TagData[];
}

export const TagsPile: FC<TagsPile> = ({ tags }) => {
  return (
    <nav className={styles.list}>
      {tags.map(({ name, count, linkPrefix }) => (
        <Link to={`${linkPrefix}/${name}`} key={`all-tags-${name}`}>
          {name} ({count}){" "}
        </Link>
      ))}
    </nav>
  );
};
