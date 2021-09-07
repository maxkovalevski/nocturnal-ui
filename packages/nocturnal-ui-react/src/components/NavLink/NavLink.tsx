import React, { FC } from "react";

import * as styles from "./nav-link.module.css";
import { LinkView } from "../../typings/LinkView";

export interface NavLinkProps {
  isActive?: boolean;
  linkView?: LinkView;
  to: string;
  className?: string;
}

export const NavLink: FC<NavLinkProps> = ({
  to,
  children,
  isActive = false,
  linkView = ({ to, children, ...props }) => <a href={to} {...props}>{children}</a>
}) => {
  const styleName = isActive ? "active" : "navlink";

  return (
    <>
      {to.includes("http") ? (
        <a href={to} className={styles[styleName]}>
          {children}
        </a>
      ) : linkView?.({ to, children, className: styles[styleName] })}
    </>
  );
};
