import React, { FC } from "react";
import { Link } from "@reach/router";

import * as styles from "./breadcrumbs.module.css";

export interface BreadcrumbsProps {
  items: { to?: string; label: string }[];
}

export const Breadcrumbs: FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav className={styles.breadcrumbs}>
      {items.map(({ to = "/", label }, index) => (
        <React.Fragment key={`breadcrumb-${index}`}>
          {index === items.length - 1 ? (
            <span>{label}</span>
          ) : (
            <Link to={to} className={styles.link}>
              {label}
            </Link>
          )}
          {index !== items.length - 1 && (
            <span className={styles.splitter}>/</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};
