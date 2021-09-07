import React, { FC } from "react";

import { LinkView } from "../../typings/LinkView";

import * as styles from "./tags-pile.module.css";

export interface TagData {
  name: string;
  count: number;
  link: string;
}

export interface TagsPileProps {
  tags: TagData[];
  linkView?: LinkView;
}

export const TagsPile: FC<TagsPileProps> = ({
  tags,
  linkView = ({ to, children, ...props }) => <a href={to} {...props}>{children}</a>
}) => {
  return (
    <nav className={styles.list}>
      {tags.map(({ name, count, link }) => <React.Fragment key={`all-tags-${name}`}>{linkView({ to: link, children: `${name} (${count})` })}</React.Fragment>)}
    </nav>
  );
};
