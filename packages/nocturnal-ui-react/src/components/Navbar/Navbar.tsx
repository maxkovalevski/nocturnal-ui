import React, { FC, ReactNode } from "react";

import { NavItem } from "../../common/types";
import { LinkView } from "../../typings/LinkView";

import { NavLink } from "../NavLink";

import * as styles from "./navbar.module.css";

export interface NavbarProps {
  currentPath?: string;
  items: NavItem[];
  withLine?: boolean;
  contentAfter?: ReactNode;
  linkView?: LinkView;
}

export const Navbar: FC<NavbarProps> = ({
  items,
  currentPath = "",
  withLine = false,
  contentAfter,
  linkView,
}) => {
  return (
    <nav className={styles.navbar}>
      {items.map(({ name, path }) => (
        <NavLink
          key={path}
          to={path}
          isActive={
            path === "/" ? currentPath === path : currentPath.includes(path)
          }
          linkView={linkView}
        >
          {name}
        </NavLink>
      ))}
      {withLine && <span className={styles.line}></span>}
      {contentAfter && contentAfter}
    </nav>
  );
};
