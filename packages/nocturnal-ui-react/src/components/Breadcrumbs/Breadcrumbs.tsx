import React, { FC } from "react";

import * as styles from "./breadcrumbs.module.css";
import { LinkView } from "../../typings/LinkView";

export interface BreadcrumbsProps {
  items: { to?: string; label: string }[];
  linkView: LinkView;
}

export const Breadcrumbs: FC<BreadcrumbsProps> = ({
  items,
  linkView = ({ to, children, ...props }) => <a href={to} {...props}>{children}</a>
}) => {
  return (
    <nav className={styles.breadcrumbs}>
      {items.map(({ to = "/", label }, index) => (
        <React.Fragment key={`breadcrumb-${index}`}>
          {index === items.length - 1 ? (
            <span>{label}</span>
          ) : linkView?.({ to, className: styles.link, children: label })}
          {index !== items.length - 1 && (
            <span className={styles.splitter}>/</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};
