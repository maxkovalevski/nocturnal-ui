import React, { FC } from "react";

import * as styles from "./page-grid.module.css";

export const PageGrid: FC = ({ children }) => {
  return <div className={styles.page}>{children}</div>;
};
