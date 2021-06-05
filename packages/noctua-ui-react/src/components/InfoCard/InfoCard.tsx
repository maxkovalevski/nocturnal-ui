import React, { FC } from "react";

import * as styles from "./info-card.module.css";

interface InfoCardProps {
  variant?: "grey" | "colorful";
}

export const InfoCard: FC<InfoCardProps> = ({ children, variant = "grey" }) => {
  return <div className={styles[variant]}>{children}</div>;
};
