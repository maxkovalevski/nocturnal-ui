import React, { FC } from "react";
import { Link } from "@reach/router";

import * as styles from "./logo.module.css";

export interface LogoProps {
  title: string;
}

export const Logo: FC<LogoProps> = ({ title }) => {
  return (
    <Link to="/" className={styles.logo}>
      {title}
    </Link>
  );
};
