import React, { FC } from "react";

import * as styles from "./text-content.module.css";

interface TextContentProps {
  imgSrc?: string;
  imgView?: React.ReactNode;
}

export const TextContent: FC<TextContentProps> = ({
  children,
  imgSrc,
  imgView,
}) => {
  return (
    <div className={styles.content}>
      {(imgSrc || imgView) && (
        <div className={styles.image}>
          {imgSrc && <img src={imgSrc} alt="" />}
          {imgView && imgView}
        </div>
      )}
      <div className={styles.inner}>{children}</div>
    </div>
  );
};

export default TextContent;
