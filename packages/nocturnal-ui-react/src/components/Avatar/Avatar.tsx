import React, { FC } from "react";

import * as styles from "./avatar.module.css";

export interface AvatarProps {
  src: string;
  alt?: string;
}

export const Avatar: FC<AvatarProps> = ({ src, alt }) => {
  return <img className={styles.avatar} src={src} alt={alt} />;
};
