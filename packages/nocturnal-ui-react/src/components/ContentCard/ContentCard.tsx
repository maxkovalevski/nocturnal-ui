import React, { FC } from "react";

import * as styles from "./content-card.module.css";

export interface ContentCardProps {
  topView?: React.ReactNode;
  bottomView?: React.ReactNode;
}

export const ContentCard: FC<ContentCardProps> = ({
  children,
  topView,
  bottomView,
}) => {
  return (
    <div className={styles.content}>
      {topView && <div className={styles.top}>{topView}</div>}
      <div className={styles.inner}>{children}</div>
      {bottomView && <div className={styles.bottom}>{bottomView}</div>}
    </div>
  );
};

export default ContentCard;
