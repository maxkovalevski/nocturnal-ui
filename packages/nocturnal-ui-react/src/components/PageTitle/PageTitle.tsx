import React, { CSSProperties, FC } from "react";

import * as styles from "./page-title.module.css";

export interface PageTitleProps {
  style?: CSSProperties;
}

export const PageTitle: FC<PageTitleProps> = ({ children, style }) => {
  return (
    <header className={styles.header} style={style}>
      {/* <PageTitle theme={theme}>{title}</PageTitle> */}
      <h1 className={styles.title}>{children}</h1>
      {/* <div
        style={{
          textAlign: "right",
        }}
      >
        <Link to="/tags">
      All Tags
    </Link>
        <SearchField />
      </div> */}
    </header>
  );
};
