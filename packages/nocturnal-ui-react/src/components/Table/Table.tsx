import React, { FC } from "react";

import * as styles from "./table.module.css";

export const Table: FC = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <table>{children}</table>
    </div>
  );
};
