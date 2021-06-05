import React, { FC } from "react";

import * as styles from "./full-width-container.module.css";

export const FullWidthWrapper: FC = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};
