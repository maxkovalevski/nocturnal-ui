import React, { FC } from "react";
import { LinkProps, Link } from "@reach/router";

import * as styles from "./pagination-link.module.css";

export interface PaginationLinkProps
  extends Pick<LinkProps<{}>, "to" | "children"> {
  isActive?: boolean;
  isDisabled?: boolean;
}

export const PaginationLink: FC<PaginationLinkProps> = ({
  to,
  isActive = false,
  isDisabled = false,
  children,
}) => {
  const cls = isDisabled ? "disabled" : isActive ? "active" : "link";

  return (
    <Link to={to} className={styles[cls]}>
      {children}
    </Link>
  );
};
