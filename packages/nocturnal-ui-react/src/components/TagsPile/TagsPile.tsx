import React, { FC } from "react";
import { Link } from "@reach/router";

import * as styles from "./tags-pile.module.css";

export interface TagData {
  name: string;
  count: number;
  link: string;
}

export interface TagsPileProps {
  tags: TagData[];
}

export const TagsPile: FC<TagsPileProps> = ({ tags }) => {
  return (
    <nav className={styles.list}>
      {tags.map(({ name, count, link }) => (
        <Link to={link} key={`all-tags-${name}`}>
          {name} ({count}){" "}
        </Link>
      ))}
    </nav>
  );
};
