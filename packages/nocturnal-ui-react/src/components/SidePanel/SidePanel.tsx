import React, { FC } from "react";

import styles from "./side-panel.module.css";

interface SidePanelProps {
  position?: "left" | "right";
}

export const SidePanel: FC<SidePanelProps> = ({
  children,
  position = "left",
}) => {
  return <aside className={styles[position]}>{children}</aside>;
};
