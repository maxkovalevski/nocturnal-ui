import React, { FC } from "react";

import * as styles from "./page-grid.module.css";

interface PageGridProps {
  direction?: "default" | "reverse";
}

export const PageGrid: FC<PageGridProps> = ({
  children,
  direction = "default",
}) => {
  const className = direction === "default" ? "page" : "reverse";

  return <div className={styles[className]}>{children}</div>;
};
