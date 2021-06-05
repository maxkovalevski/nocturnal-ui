import React, { FC } from "react";
import { LinkProps, Link } from "@reach/router";

import * as styles from "./nav-link.module.css";

interface NavLinkProps
  extends Pick<LinkProps<{}>, "to" | "className" | "children"> {
  isActive?: boolean;
}

export const NavLink: FC<NavLinkProps> = ({
  to,
  children,
  isActive = false,
}) => {
  const styleName = isActive ? "active" : "navlink";

  return (
    <>
      {to.includes("http") ? (
        <a href={to} className={styles[styleName]}>
          {children}
        </a>
      ) : (
        <Link to={to} className={styles[styleName]}>
          {children}
        </Link>
      )}
    </>
  );
};
